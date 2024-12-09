import logolions from '../img/Lions.png'
import './LogoLions.css'

function LogoLions(){
    return(
        <div>
            <a href="https://www.lionsclubs.org/pt" target='_Blank'>
                <img src={logolions} alt="logo-lions" id='logo-lions'/>
            </a>
        </div>
    )
}

export default LogoLions