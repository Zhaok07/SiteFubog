import { Link } from 'react-router-dom'
import logofubog from '../img/Fubog.png'
import './LogoFubog.css'

function LogoFubog(){
    return(
        <div>
            <Link to="/">
            <img src={logofubog} alt="logo-fubog" id='logo-fubog' />
            </Link>
        </div>
    )
}

export default LogoFubog