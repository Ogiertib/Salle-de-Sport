import React from 'react'
import FranchisesTable from '../components/FranchisesTable'

const Franchises = ({franchises,  auth}) => {

    return <>
        <h2> Franchises</h2>
        { auth.guards.web.user.role == 1 &&
        <p>
            <a href="createFranchise/new" className='btn btn-success'>Créer une franchise</a>
        </p> }
        <FranchisesTable data={franchises.data} auth={auth.guards.web.user}/>
    </>
}
export default Franchises