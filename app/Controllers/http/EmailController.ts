import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { EmailService } from 'App/Services/EmailService'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'


export default class EmailController {

    async emailClient({ view}: HttpContextContract){
        
            return view.render('home/emailClient', {
            })
    }
    async emailFranchise({ view}: HttpContextContract){
        
        return view.render('home/emailFranchise', {
        })
}
        
 async storeFranchise({session, request, response} : HttpContextContract){
         const user = new User()
         const data = await request.validate(UpdateUserValidator)
    EmailService.send(request.all() as any)
    user
    .merge({...data, 
        role: 3, 
        password: 'franchise'
    })
    .save()
    session.flash('success', "Un email de validation vient d'etre envoyer")
    return response.redirect('/')
 }

        
 async storeClient({session, request, response} : HttpContextContract){
         const user = new User()
         const data = await request.validate(UpdateUserValidator)
    EmailService.send(request.all() as any)
    user
    .merge({...data, 
        role: 2, 
        password: 'clientclient'
    })
    .save()
    session.flash('success', "Un email de validation vient d'etre envoyer")
    return response.redirect('/')
 }
}
new User()
        
       