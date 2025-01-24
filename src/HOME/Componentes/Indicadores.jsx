import "./Indicadores.css"

function Indicadores(){
    return(
        <div className="container-indicadores">
            
            <div className="indicadores-box">
                <h1 className="numeros-indicadores">282.4M</h1>
                <h2 id="desc-indicadores">atendimentos</h2>
            </div>

            <div className="indicadores-box">
                <h1 className="numeros-indicadores">108.6M</h1>
                <h2 id="desc-indicadores">consultas</h2>
            </div>

            <div className="indicadores-box">
                <h1 className="numeros-indicadores">435.1M</h1>
                <h2 id="desc-indicadores">exames</h2>
            </div>

            <div className="indicadores-box">
                <h1 className="numeros-indicadores">220.4M</h1>
                <h2 id="desc-indicadores">cirurgias</h2>
            </div>


        </div>
    )
}

export default Indicadores