import React, { useState } from 'react'


function FranchisesTable( {data , auth} ) {
    const [searchTerm, setSearchTerm]= useState("")
    const [checked, setChecked]= useState(false)

    const handleChange = () => {
        setChecked(!checked);
      };
 
return(
    <>
        <div className='row mb-3'>
            <div className='col'>
                <input 
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    value={searchTerm}
                    placeholder='Rechercher'
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
            </div>
                <div className='col'>
                    <label>
                    
                        <input 
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                         Franchise Active
                    
                    </label>
                </div>
        </div>
        <div className='list-group'>
            {data.filter((item)=>{
                return item.name.toUpperCase().includes(searchTerm.toUpperCase()) 
                && checked ? item.active : item.name.toUpperCase().includes(searchTerm.toUpperCase()) 
            }).map((item)=> {
                return (
                    <div>
                         {(auth.id == item.user_id || auth.id == 1 )&&
                    <div className='list-group-item' key={item.id}> 
                   
                    
                        <h4>{item.name}</h4>
                        <div>{item.active ? <p>La franchise est <strong>active</strong></p>: "La franchise est désactivé"}</div>
                        <div>adresse:
                            <strong> {item.address}</strong>
                        </div>
                        <div>
                            Client: 
                            <strong>
                                {item.client?.name ? item.client?.name : "pas de Client pour cette franchise"}
                            </strong>
                        </div>
                        <div>
                            Contact:
                             <strong>
                                {item.user?.name ? " "+ item.user?.name + " " : "pas de contact enregistré"} 
                                {item.user?.email} 
                            </strong>
                        </div>
                        <div>
                            La franchise peut: 
                             <strong>
                                { item.drink ? "Vendre des boissons. " : '' }
                                { item.newsletter ? "Envoyer des newsletters. " : ''}
                                { item.planning ? "Gérer le planning équipe. ":''}
                            </strong>
                    </div>
                        {auth.role == 1 && <div>
                        <a href={'showFranchise/'+item.id} className="btn btn-success" >Modifier</a>
                        </div>}
                     </div>
             } </div>
                );
            })}
        </div>
    </>
)
}
export default FranchisesTable
