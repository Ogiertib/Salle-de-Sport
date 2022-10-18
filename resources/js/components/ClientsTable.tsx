import React, { useState } from 'react'


function ClientsTable( {data , auth} ) {
    const [searchTerm, setSearchTerm]= useState("")
  
return(
    <>
        <div className='mb-3'>
            <input 
                type="text"
                name="searchBar"
                id="searchBar"
                value={searchTerm}
                placeholder='Rechercher'
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
        </div>
        <div className='list-group md-3'>
            {data.filter((item)=>{
                return item.name.toUpperCase().includes(searchTerm.toUpperCase()) 
                
            }).map((item)=> {
                return (
                    <div>
                        {(auth.id == item.user_id || auth.id == 1 ) &&
                        <div className='list-group-item' key={item.id}> 
                            <div className='row justify-content-around'>
                                <div className='col'>
                                <h4>{item.name}</h4>
                                </div>
                                <div className='col justify-content-end'>
                                        <a href={'/clientFranchise/'+item.id} className="btn btn-outline-success" >franchises du client</a>
                                </div>
                            </div>
                            <div>
                                Contact: 
                                {item.user?.name ? " "+ item.user?.name +" "  : "pas de contact enregistré"} 
                                {item.user?.email} 
                            </div>
                            <div>
                                Droit global:  
                                { item.drink ? "Vendre des boissons. " : '' }
                                { item.newsletter ? "Envoyer des newsletters. " : ''}
                                { item.planning ? "Gérer le planning équipe. ":''}
                            </div>
                        
                            {auth.role == 1 && 
                            <div>
                            <a href={'/showClient/'+item.id} className="btn btn-success" >Modifier</a>
                            </div>}
                        </div>}
                    </div>
                );
            })}
        </div>
    </>
)
}
export default ClientsTable
