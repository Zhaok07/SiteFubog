import ScrollTop from "./Componentes/ScrollTop"
import BarraMenu from './Componentes/BarraMenu'
import FotoOlho from './Componentes/FotoOlho'
import TituloHome from "./Componentes/TituloHome"
import './PaginaHome.css'
import Indicadores from "./Componentes/Indicadores"

function PaginaHome(){
    return(
        <div>
        <BarraMenu/>
        <TituloHome/>
        <ScrollTop/>
        <FotoOlho/>
        <Indicadores/>
        


        
        </div>
    )
}

export default PaginaHome