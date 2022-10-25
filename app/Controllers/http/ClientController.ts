
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Clients from 'App/Models/Client'
import Franchise from 'App/Models/Franchise'
import User from 'App/Models/User'
import UpdateClientValidator from 'App/Validators/UpdateClientValidator'


export default class ClientController {
    prompt: any

    async index({ inertia, request, auth}: HttpContextContract){
        const user = await User.all()
        const page = request.input('page', 1)
        const clients = await Clients.query().preload('user').paginate(page , 5)
            return inertia.render('Clients', {
            clients,
            user,
            auth
        })
    }
    async showClient({params, view}: HttpContextContract){
       const client = await Clients.query().where('id', params.id).firstOrFail()
       const franchise = await Franchise.all()
       const user = await User.all()
       return view.render('home/showClient',{
        franchise,
        client,
        user
       })
    }
    async clientFranchise({params, view}: HttpContextContract){
        const client = await Clients.query().where('id', params.id).firstOrFail()
        const user = await User.all()
        const franchise = await Franchise.query().where('clientId', params.id).preload('user') 
        return view.render('home/clientFranchise',{
        franchise,
        client,
        user
        })
     }
    async updateClient({params, request, response, session}: HttpContextContract){
       const client = await Clients.findOrFail(params.id) 
       const data = await request.validate(UpdateClientValidator)
        client
            .merge({...data,
                drink: data.drink || false,
                newsletter: data.newsletter || false,
                planning: data.planning || false})
            .save()
       session.flash({success: "Le client a bien été sauvgardé "})
       return response.redirect().toRoute('Clients')
    }

    async createClient({view}:HttpContextContract) {
        const client = new Clients()
        const user = await User.query().where('role', 2)
        return view.render('home/createClient',{
            client,
            user
        })
    }
    async store ({params, request, inertia, session}: HttpContextContract){
        const client = params.id ? await Clients.findOrFail(params.id) : new Clients()
        const data = await request.validate(UpdateClientValidator)
        client
             .merge({...data,
                drink: data.drink || false,
                newsletter: data.newsletter || false,
                planning: data.planning || false })
             .save()
        session.flash({success: "Le client a bien été crée"})
        return  inertia.render('Clients')
     }

    async deleteClient({params, session, response}: HttpContextContract){
        const client = await Clients.findOrFail(params.id)
        await client.delete()
        session.flash({success: "Le Client a bien été supprimé"})
        return response.redirect().toRoute('home/Client')
     }

}
