import { DateTime } from 'luxon'
import {  BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'
import User from 'App/Models/User'

export default class Franchise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public address: string

  @column()
  public active: boolean 

  @column()
  public drink: boolean

  @column()
  public newsletter: boolean

  @column()
  public planning: boolean

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column()
  public clientId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  usersId: number

}


