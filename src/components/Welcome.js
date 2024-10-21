import { useState } from "react";

export default function Welcome(props)
{
    const [counter, setCounter] = useState(0);
    const { message, name } = props;
    return (
    <div>
        <h1>Hola {name}</h1>
        <h2>Contador de React con Hooks</h2>
            <button type="submit" onClick={() => setCounter(counter + 1)}>
                Sumar contador
            </button>
            <button onClick={() => setCounter(0)}>Limpiar botón</button>
        <p>{message} El conteo es: {counter}</p>
    </div>
);
    
}