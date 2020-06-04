const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

// describe('Journal Endpoints')
describe('Journal Endpoints', function(){
    let db
    const testUsers=helpers.makeUsersArray()
    const [testUser]= testUsers;
    const {testJournal}=helpers.makeJournalFixture()

    before('make knex instance', () => {
  db= knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db',db)
  })
  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  beforeEach("insert users", () => helpers.seedUsers(db, testUsers));

  describe(`GET /api/journal`, ()=>{
      it(`responds with 200`, ()=>{
          return supertest(app)
          .get('/api/journal')
          .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
          .expect(200)
      })

  })
  describe(`DELETE /api/journal/:journalID`, ()=>{
    beforeEach(`insert users`, () => helpers.seedUsers(db, testUsers));
      it.only(`should delete a journal`, ()=>{
      return supertest(app)
        .delete(`/api/journal/journalId`)
        .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
        .expect(204)

       
    })
  })
  describe(`PATCH /api/journal/:journalDate`,()=>{
    beforeEach(`insert users`, () => helpers.seedUsers(db, testUsers));
    it.only(`should update journal when given valid data and id`, function(){
        const patchJournal={
            entry:'new test entry',
            tasks: 'new test task',
            mindful: 'new test mindful act',
            emotion: 3,
            sleep_hours: 10
          };
          return supertest(app)
            .patch(`/api/journal/:journalDate`)
            .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
            .send(patchJournal)
            .expect(200);

    })
   
  })

  describe(`POST /api/journal`, ()=>{
      beforeEach(`insert a journal`, ()=>
        helpers.seedJournalTables(
            db,
            testUser,
            testJournal
        )
      )
      it.only(`creates a journal, responding with 201 and the new project`, function(){
          this.retries(3)
          const testJournal=testJournal[0]
          const testUser=testUser[0]
          const newJournal={
            entry:'new test entry',
            tasks: 'new test task',
            mindful: 'new test mindful act',
            emotion: 3,
            sleep_hours: 10
          }
          return supertest(app)
            .post(`/api/journal`)
            .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
            .send(newJournal)
            .expect(201)
            .expect(res=>{console.log(res.body)
            .expect(res.body.rowCount).to.equal(1)
            })
       
      })
      
  })
  
})
