import React from 'react'
import Fubog from '../img/Olho.jpeg'
import '../Componentes/FotoOlho.css'
function FotoOlho(){
    return(
        <div>
            <img src={Fubog} alt="Imagem" id='foto-olho'/>
        </div>
    )
}

export default FotoOlho