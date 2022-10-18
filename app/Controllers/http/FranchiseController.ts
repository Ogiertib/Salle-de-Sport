
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Franchise from 'App/Models/Franchise'
import User from 'App/Models/User'
import UpdateFranchiseValidator from 'App/Validators/UpdateFranchiseValidator'

export default class FranchiseController {
    prompt: any

    async index({request, inertia, auth}: HttpContextContract){
        const user = await User.all()
        const page = request.input('page', 1)
        const franchises = await Franchise.query().preload('client').preload('user').paginate(page , 5)
        return inertia.render('Franchises', {
            franchises,
            user,
            auth, 
        })
    }

    async showFranchise ({params, view}: HttpContextContract){
       const franchise = await Franchise.query().where('id', params.id).firstOrFail()
       const client = await Client.all()
       const user = await User.query().where('role', 3)
       return view.render('home/showFranchise',{
        franchise,
        client,
        user,
        
       })
    }

    async updateFranchise({params, request, response, session}: HttpContextContract){
       const franchise = await Franchise.findOrFail(params.id) 
      // await bouncer.authorize('editFranchise', franchise)
       const data = await request.validate(UpdateFranchiseValidator)
       franchise
            .merge({...data, active: data.active || false,
                    drink: data.drink || false,
                    newsletter: data.newsletter || false,
                    planning: data.planning || false, })
            .save()
       session.flash({success: "La franchise a bien été sauvgardé "})
       return response.redirect().toRoute('home')
    }

    async createFranchise({view}:HttpContextContract) {
        const franchise = new Franchise()
        const client = await Client.all()
        const user = await User.query().where('role', 3)
        return view.render('home/createFranchise',{
            franchise,
            client,
            user,  
        })
    }
 
    async store ({params, request, response, session}: HttpContextContract){
        const franchise = params.id ? await Franchise.findOrFail(params.id) : new Franchise()
        const data = await request.validate(UpdateFranchiseValidator)
        const client = await Client.findOrFail(data.clientId)
        await franchise
            .merge({
                ...data, 
                active: data.active || false,
                drink: client.drink || false,
                newsletter: client.newsletter || false,
                planning: client.planning || false
            })
            .save()
        session.flash({success: "La franchise a bien été crée"})
        return response.redirect().toRoute('home')
     }

    async deleteFranchise({params, session, response}: HttpContextContract){
        const franchise = await Franchise.findOrFail(params.id)
        await franchise.delete()
        session.flash({success: "La franchise a bien été supprimé"})
        return response.redirect().toRoute('home')
     }

}
