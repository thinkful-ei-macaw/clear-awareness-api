const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

// describe('Journal Endpoints')
describe('Journal Endpoints', function(){
    let db
    const testUsers=helpers.makeUsersArray()
    const testUser= testUsers[0];
    const testJournals=helpers.makeJournalFixture()

    before('make knex instance', () => {
  db= knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db',db)
  })
  after('disconnect from db', () => db.destroy())

//   before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  beforeEach(`insert a journal`, async ()=>{
    await helpers.seedUsers(db,testUsers);
    await helpers.seedJournalTables(
        db,
        testJournals
    );
    })
  describe(`GET /api/journal`, ()=>{
      it(`responds with 200`, ()=>{
          return supertest(app)
          .get('/api/journal')
          .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
          .expect(200)
      })

  })
  describe(`DELETE /api/journal/:journalID`, ()=>{
    it(`should delete a journal`, ()=>{
      return supertest(app)
        .delete(`/api/journal/${testJournals[0].id}`)
        .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
        .expect(204)
 
       
    })
  })
  describe(`POST /api/journal`, ()=>{
    // const {testJournal:testJournals}=helpers.makeJournalFixture()

      it(`creates a journal, responding with 201 and the new project`, function(){
        //   this.retries(3)
         let testJournal=testJournals[0]
          let testUser=testUsers[0]
          const newJournal={
            entry:'new test entry',
            tasks: ['new test task'],
            mindful: 'new test mindful act',
            emotions: 3,
            sleep_hours: 10,
            date_created:"07/17/1996"
          }
          return supertest(app)
            .post(`/api/journal`)
            .set("Authorization",helpers.makeAuthHeader(testUsers[0]))
            .send(newJournal)
            .expect(201)
            
       
      })
      
  })
  
  describe(`PATCH /api/journal/:journalDate`,()=>{
    it(`should update journal when given valid data and id`, function(){
        const patchJournal={
            id:1,
            entry:'new test entry',
            tasks: ['new test task'],
            mindful: 'new test mindful act',
            emotions: 3,
            sleep_hours: 10
          };
          return supertest(app)
            .patch(`/api/journal/${testJournals[0].id}`)
            .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
            .send(patchJournal)
            .expect(204);

    })
   
  })

 
})
