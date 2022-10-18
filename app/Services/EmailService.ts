import {rules, validator, schema} from '@ioc:Adonis/Core/Validator'
import Mail from '@ioc:Adonis/Addons/Mail'

export class EmailService {
   static async send (params: Record<string, any>){
    const payload = await validator.validate({
        schema : schema.create({
            name : schema.string({trim : true}),
            email: schema.string({trim : true}, [
                rules.email()
            ]),
            message: schema.string({trim : true}),
        }),
        data: params
    })
    await Mail.send((message) =>{
        message
            .from('ogier9@gmail.com')
            .to(payload.email)
            .subject('Nouveau utilisateur')
            .htmlView('home/emailUtil', payload)
    })
   }
}