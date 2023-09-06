import React from 'react';



function Ville({villes}){
    return (
        <>
            <ul>
                {villes.map((ville)=>(
                    ville.IsMine ? (
                        <li className='red' key={ville.id}>{ville.nom}</li>
                    ) : (
                        <li key={ville.id}>{ville.nom}</li>
                    )

                    
                ))}
            </ul>
        </>
    );
};

export default Ville;