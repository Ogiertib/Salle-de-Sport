/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(()=> {
    Route.get('/createFranchise/new', 'FranchiseController.createFranchise').as('franchise.createFranchise')
    Route.post('/createFranchise/new', 'FranchiseController.store')
    Route.post('/showFranchise/:id', 'FranchiseController.updateFranchise').as('franchise.modify')
    Route.delete('/showFranchise/:id', 'FranchiseController.deleteFranchise').as('franchise.delete')
    Route.get('/showFranchise/:id', 'FranchiseController.showFranchise').as('franchise.showFranchise')

    Route.get('/createClient/new', 'ClientController.createClient')
    Route.post('/createClient/new', 'ClientController.store')
    Route.post('/showClient/:id', 'ClientController.updateClient')
    Route.delete('/showClient/:id', 'ClientController.deleteClient').as('client.delete')
    Route.get('/showClient/:id', 'ClientController.showClient').as('client.showClient')
    Route.get('/Clients', 'ClientController.index').as('Clients')
    Route.get('/clientFranchise/:id', 'ClientController.clientFranchise')
    Route.post('/clientFranchise/:id', 'ClientController.storeFranchise')

Route.get('/emailClient/','EmailController.emailClient').as('emailClient')
Route.post('/emailClient/','EmailController.storeClient')

Route.get('/emailFranchise/','EmailController.emailFranchise').as('emailFranchise')
Route.post('/emailFranchise/','EmailController.storeFranchise')
}).middleware('auth')

Route.post('/Mdp', 'UserController.storeMdp').as('mdp.update')
Route.get('/Mdp', 'UserController.updateUserMdp').as('Mdp')

Route.get('/', 'FranchiseController.index').as('home')
Route.get('/login','SecurityController.login' ).as('login')
Route.post('/login','SecurityController.log' ).as('log')
Route.get('/logout','SecurityController.logout').as('logout')