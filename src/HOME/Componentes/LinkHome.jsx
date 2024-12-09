import { Link } from "react-router-dom"
import './LinkHome.css'
function LinkHome(){
    return(
        <div>
            <Link to="/" id="link-home">HOME</Link>
        </div>
    )
}

export default LinkHome