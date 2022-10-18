import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SecurityController {

  async login ({view}: HttpContextContract){
    return view.render('auth/login')
  }

  async log({request, auth, response, session}: HttpContextContract){
    const email = request.input('email')
    const password = request.input('password')

    try{
        await auth.use('web').attempt(email, password)
        response.redirect().toRoute('home')
    }catch {
        session.flash({error: 'Identifiant incorrect'})
        response.redirect().toRoute('login')
    }
  }
  
  async logout({ auth, response }) {
    await auth.use('web').logout()
     response.redirect('/login')
  }
}
