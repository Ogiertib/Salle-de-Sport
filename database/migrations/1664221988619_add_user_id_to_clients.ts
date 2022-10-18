import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddUserIdToClients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('SET NULL')
        .nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('user_id')
    })
  }
}