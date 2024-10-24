import { useState, useEffect } from "react";
import SemaforoButton from "./SemaforoButton.js";

export default function Welcome(props)
{
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    
    // Desestructuración de las propiedades (props) que se pasan al componente. 'message' y 'name' son valores pasados como props desde el componente padre App.js.
    const { message, name } = props;

    /*Este hook se ejecuta después de cada renderizado, en este caso cada vez que el valor de semaforo cambie. 
    Solo se activa cuando la dependencia [semaforo] cambia, lo que significa que useEffect no se ejecuta en otros cambios de estado. */
    useEffect (() => {
    }, [semaforo]);
    
    const contar = () => {
        setCounter(counter + 1);
        setSemaforo(!semaforo); //Cambia el estado del semaforo por lo contrario a lo que ya tiene asignado
    };
    
    return(
        <div>
            <h1>Hola {name}</h1>
            <h2>Contador de React con Hooks</h2>
            <button type="submit" onClick={contar}>
                Sumar contador
            </button>
            <button onClick={() => setCounter(0)}>
                Limpiar botón
            </button>
            <p>{message} El conteo es: {counter}</p>
            <p>El semáforo está en color: <SemaforoButton semaforo={semaforo} /> </p>
        </div>
    );
}