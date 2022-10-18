import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Franchise from 'App/Models/Franchise'
import User from 'App/Models/User'

export default class UsersController {
    prompt: any

    async createUserFranchise({view}:HttpContextContract) {
        const user = new User()
        const client = await Client.all()
        const franchise = await Franchise.all()
        return view.render('home/createUserFranchise',{
            franchise,
            client,
            user
        })
    }

 async updateUserMdp({view}: HttpContextContract) {
    const user = await User.all()
    return view.render('home/UpdateUserMdp', {
        user
    })
 }

 async  storeMdp({request, session, response}: HttpContextContract){
    const email = request.input('email')
    const name = request.input('name')
    const password = request.input('password')
    const user = await User.query().where('email', email).where('name', name).firstOrFail()
    user
        .merge({...user, password : password })
        .save()
    session.flash({success: "Le mot de passe a bien été changé"})
    return response.redirect().toRoute('/login')
  }

}
