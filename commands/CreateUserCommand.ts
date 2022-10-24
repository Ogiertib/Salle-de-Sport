import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateUserCommand extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'create:user'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'crée un User'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest` 
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call 
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const { default: User } = await import('App/Models/User')

    await User.create({
      email: 'joe@doe.fr',
      name: 'John',
      role: 1,
      password:'1234'
    })
    // const user = new User() 
    // user.email = 'joe@doe.fr'
    // user.name = 'john'
    // user.password = '1234'
    // user.role = 1
    // user.save()
    this.logger.info('User créé')
  }
}
