import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'franchises'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('client_id')
        .unsigned()
        .references('clients.id')
        .onDelete('SET NULL')
        .nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('client_id')
    })
  }
}
