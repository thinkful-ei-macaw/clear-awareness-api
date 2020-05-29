const xss = require('xss')

const JournalService={
  getAlljournals(db){
      return db
        .from('journal').select('*')
  },
  insert(db,journal){
      return db('journal')
      .insert(journal).returning('id')
  },
  serializeJournal(journal){
      return{
          id: journal.id,
          entry: journal.entry ,
          tasks: journal.tasks,
          emotion: journal.emotion,
          date_created: new Date(journal.date_created)
      }
  },
  delete(knex,id){
      return knex
        .from('journal')
        .where('id',id)
        .delete()
  }

};

module.exports=JournalService