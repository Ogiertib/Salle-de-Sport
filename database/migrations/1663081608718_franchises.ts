import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'franchises'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('address').nullable()
      table.boolean('active').notNullable().defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.boolean('planning').nullable()
      table.boolean('drink').nullable()
      table.boolean('newsletter').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
