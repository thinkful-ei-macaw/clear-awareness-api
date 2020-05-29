const app = require('../src/app')
const  quotes = require('../src/store')

describe('GET/quotes',()=>{
    it('gets the quotes from the store',()=>{
      return supertest(app)
      .get('/api/quotes')
      .expect(200, {quotations: quotes.quotes})
    })
  })