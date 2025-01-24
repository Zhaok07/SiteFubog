import LogoFubog from "../Componentes/LogoFubog"
import LogoLions from "../Componentes/LogoLions"
import LinkHome from "../Componentes/LinkHome"
import LinkOuvidoria from "../../OUVIDORIA/Componentes/LinkOuvidoria"
import '../Componentes/BarraMenu.css'
import TituloHome from "./TituloHome"

function BarraMenu(){
    return(
        <div className="barra-menu">

        <div className="container-pages">
        <LinkHome/>
        <LinkOuvidoria/>
        </div>



        <div className="container-logos">
        <LogoFubog/>
        <LogoLions/>
        </div>

        </div>
    )
}

export default BarraMenu