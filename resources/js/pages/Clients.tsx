import React from 'react'
import ClientsTable from '../components/ClientsTable'


const Clients = ({clients,  auth}) => {

    return <>
        <h2> Client</h2>
        { auth.guards.web.user.role == 1 &&
        <p>
            <a href="createClient/new" className='btn btn-success'>Créer un Client</a>
        </p> }
            <ClientsTable data={clients.data} auth={auth.guards.web.user}/>
    </>
}
export default Clients