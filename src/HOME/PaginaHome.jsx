import ScrollTop from "./Componentes/ScrollTop"
import BarraMenu from './Componentes/BarraMenu'
import FotoOlho from './Componentes/FotoOlho'
import TituloHome from "./Componentes/TituloHome"
import './PaginaHome.css'
import Indicadores from "./Componentes/Indicadores"
import PalavraPresidente from "./Componentes/PalavraPresidente"
import ContactForm from "./Componentes/ContactForm"
import Rodape from "./Componentes/Rodape"
import BotaoWhasapp from "./Componentes/BotaoWhatsapp"

function PaginaHome(){
    return(
        <div className="container-page-home">
            <div>
        <BarraMenu/>
            </div>

            <div>
        <TituloHome/>
            </div>

            <div className="container-botoes-flutuantes">
        <BotaoWhasapp/>
        <ScrollTop/>
            </div>
            
            <div className="container-foto-indicadores">
        <FotoOlho/>
        <Indicadores/>
            </div>

            <div>
        <PalavraPresidente/>
            </div>

            <div>
        <ContactForm/>
            </div>

            <div>
        <Rodape/>     
            </div>
        </div>
    )
}

export default PaginaHome