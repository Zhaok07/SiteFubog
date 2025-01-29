import ScrollTop from "./Componentes/ScrollTop"
import BarraMenu from './Componentes/BarraMenu'
import FotoOlho from './Componentes/FotoOlho'
import TituloHome from "./Componentes/TituloHome"
import './PaginaHome.css'
import Indicadores from "./Componentes/Indicadores"
import PalavraPresidente from "./Componentes/PalavraPresidente"

function PaginaHome(){
    return(
        <div className="container-page-home">
            <div>
        <BarraMenu/>
            </div>

            <div>
        <TituloHome/>
            </div>

            <div>
        <ScrollTop/>
            </div>
            
            <div>
        <FotoOlho/>
            </div>

            <div>
        <Indicadores/>
            </div>

            <div>
        <PalavraPresidente/>
            </div>
        </div>
    )
}

export default PaginaHome