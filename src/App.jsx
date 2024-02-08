import { useEffect, useState } from "react"
import axios from "axios"
function App() {

  
  const [criptos, setCriptos] = useState()

  useEffect(()=>{
    axios.get(`https://api.coincap.io/v2/assets`)
    .then((data) => {
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("la peticion fallo");
    })
  }, [])
  //solucion a coneccion lenta
  if(!criptos) return <><span>Cargando...</span></>
  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        { criptos.map(({id,name, priceUsd}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        )) }
      </ol>
    </>
  );
}

export default App
