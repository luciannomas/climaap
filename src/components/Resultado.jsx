import useClima from "../hooks/useClima"

const Resultado = () => {
    const tiempo = Date.now()
    const hoy = new Date(tiempo)

    const aux = new Date()
    const diass = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado","domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
    let cont = 1 

    // TODO: Hook
    const { resultado, days } = useClima()

    const { name, main } = resultado
    const { daily } = days
    
    // TODO: Grados Kelvin
    const kelvin = 273.15

    return (
        <>
        <div className="contenedor clima">
            <h2 style={{ marginTop: -24 }}>El clima en {name} es: </h2>

            <p>
                {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <div className="temp_min_max">
                <p>
                    Mín: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
                </p>
                <p>
                    Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
                </p>
            </div>

        </div>
        
        <div className="container clima" style ={{ justifyContent: 'space-between'}}>
        <h2 style = {{ textAlign: 'center', fontFamily: 'fantasy'}}>Resto de la semana </h2>
                <div style= {{ display: 'flex', marginTop: -26 }}>
                
                    {
                        daily?.map((e, index) => (
                            index < 5 ? (
                                <div style= {{ marginRight: '15px', marginLeft: '23px' }} > 
                                    <h3 style = {{ textAlign: 'center'}}>
                                        { diass[aux.getDay() + cont++] }
                                    </h3>
                                    <p className="fuente">
                                        {parseInt(e.temp.day - kelvin)} <span>&#x2103;</span>
                                    </p>
                                    <div className="fuente">
                                        <p>
                                            Mín: {parseInt(e.temp.min - kelvin)} <span>&#x2103;</span>
                                        </p>
                                        <p>
                                            Máx: {parseInt(e.temp.max - kelvin)} <span>&#x2103;</span>
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div> </div>
                            )
                        ))
                    }
                </div>
            </div>
            </>   
           
          
        
    )
}

export default Resultado