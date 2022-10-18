import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import User from 'App/Models/User'

export default class UpdateFranchiseValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({trim: true}, [
      rules.minLength(3)
    ]),
    clientId: schema.number([
      rules.exists({column: Client.primaryKey, table: Client.table})
    ]),
    userId: schema.number([
      rules.exists({column: User.primaryKey, table: User.table})
    ]),
    address: schema.string({trim: true}),
    active: schema.boolean.nullableAndOptional(),
    planning: schema.boolean.nullableAndOptional(),
    newsletter: schema.boolean.nullableAndOptional(),
    drink : schema.boolean.nullableAndOptional()
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
