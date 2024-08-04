import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Tweets extends BaseSchema {
  protected tableName = 'tweets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('content', 255).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true}).defaultTo(this.now)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}