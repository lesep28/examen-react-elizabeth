import React, { useState } from "react";
import Card from "./Card";

import FormStyles from "../styles/Form.module.css";
import CardStyles from "../styles/Card.module.css";


const Form = () => {

  const [user, setUser] = useState({
    nombre: "",
    edad: "",
    superFavorito: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState( "");

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    const regexString= /[a-zA-ZáÁ]$/;
    console.log(regexNum.test(user.edad));
    if (user.nombre.trim().length <= 3){
      setError(true);
      setErrorMessage("El nombre debe tener más de 3 carácteres")
    } 
    else if(!regexString.test(user.nombre)){
      setError(true);
      setErrorMessage("El nombre solo permite letras")
    }
    else if(!regexNum.test(user.edad)){
      setError(true);
      setErrorMessage("La edad debe ser un valor numérico")

    }
    else if((user.edad<0) || (user.edad>99)){
      setError(true);
      setErrorMessage("La edad debe ser un valor mayor a 0 y menor a 99")

    }
    else if(user.superFavorito.length <= 6){
      setError(true);
      setErrorMessage("El superhéroe debe tener al menos 6 carácteres")
    }

    else {
      setShow(true);
      setError(false);
    }
    
  };


  return (
    <div>
        

        <form onSubmit={handleSubmit}>
          <div className={FormStyles.formContainer}>
          <span>Agrega tu super favorito completando las opciones.</span>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Edad: </label>
          <input 
            type=  "text"
            onChange={(event) =>
              setUser({ ...user, edad: event.target.value })
            }
          />
          <label>Superhéroe favorito: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, superFavorito: event.target.value })
            }
          />
          <button>Enviar</button>
          </div>
          
          {error ? (
            <h4 style={{ color: "red" }}>
              {errorMessage}
            </h4>
          ) : null}
        </form>
        {show ? (
         <div className={CardStyles.cardContainer}>
          <Card nombre={user.nombre}  superFavorito={user.superFavorito}/>

         </div>
        
      ) : (""
 
      )}
    </div>
  );
};

export default Form;


