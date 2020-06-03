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
      it.only(`responds with 200`, ()=>{
          return supertest(app)
          .get('/api/journal')
          .set("Authorization",helpers.makeAuthHeader(testUsers[1]))
          .expect(200)
      })

  })
})
  describe(`POST /api/journal`, ()=>{
      beforeEach('insert a journal', ()=>
        helpers.seedJournalTables(
            db,
            testJournal
        )
      )
      it(`creates a journal, rsponding with 201 and the new project`, function(){
          this.retries(3)
          const testJournal=testJournal[0]
          const newJournal={
            entry:'new test entry',
            tasks: 'new test task',
            mindful: 'new test mindful act',
            emotion: 3,
            sleep_hours: 10
          }
          return supertest(app)
            .post(`/api/journal`)
            .send(newJournal)
            .expect(201)
            .expect(res=>{console.log(res.body)
            .expect(res.body.rowCount).to.equal(1)
            })
            .expect(res=>
              db
                .from('journal')
                .select('*')
                .where({id: res.body.id})
                .first()
                .then(row =>{
                    
                })    
                )
      })
  })
