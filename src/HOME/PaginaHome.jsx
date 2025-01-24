import ScrollTop from "./Componentes/ScrollTop"
import BarraMenu from './Componentes/BarraMenu'
import FotoOlho from './Componentes/FotoOlho'
import TituloHome from "./Componentes/TituloHome"
import './PaginaHome.css'

function PaginaHome(){
    return(
        <div>
        <BarraMenu/>
        <TituloHome/>
        <ScrollTop/>
        <FotoOlho/>
        


        
        </div>
    )
}

export default PaginaHome