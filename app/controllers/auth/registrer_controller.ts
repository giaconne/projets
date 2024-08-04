import type { HttpContext } from '@adonisjs/core/http'
import user from 'app/models/user.ts'

export default class RegistrerController {
  
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async tweets({ view }: HttpContext) {
    //return view.render('pages/auth/register')
  }
  
  async landing({ view }: HttpContext) {
    return view.render('pages/auth/landing')
  }
  
  async register({ request, response, auth }: HttpContext) {
    const data = request.only(['username', 'email', 'password'])

    const User = await user.create(data)

    await auth.use('web').login(user)

    return response.redirect('/home')
  }
  
}