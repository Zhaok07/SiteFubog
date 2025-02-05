import { BsWhatsapp } from "react-icons/bs";
import "./BotaoWhatsapp.css"

function BotaoWhasapp(){
    return(
        <div className="container-botao-whatsapp">
        <a href="https://api.whatsapp.com/send?phone=5562995134523" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp id="botao-whatsapp" />
        </a>
        </div>
    )
}

export default BotaoWhasapp