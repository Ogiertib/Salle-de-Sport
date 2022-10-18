import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.boolean('planning').notNullable().defaultTo(false)
      table.boolean('drink').notNullable().defaultTo(false)
      table.boolean('newsletter').notNullable().defaultTo(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
