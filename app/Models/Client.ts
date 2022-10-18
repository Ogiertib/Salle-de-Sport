import { DateTime } from 'luxon'
import { BaseModel,BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string
  
  @column()
  public drink: boolean

  @column()
  public newsletter: boolean

  @column()
  public planning: boolean

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
    static drink: boolean | undefined
    static newsletter: boolean | undefined
    static planning: boolean | undefined
}
