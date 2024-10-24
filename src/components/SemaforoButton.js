import './SemaforoButton.css';

export default function SemaforoButton({semaforo})
{
    return (
        <button className={`semaforo-btn ${semaforo ? 'rojo' : 'verde'}`}>
            {semaforo ? 'Rojo' : 'Verde'}
        </button>
    );
}