import { useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');
    
    const calculo = () => {
        const resultado = peso / (altura * altura);
        let imcArredondado = Math.round(resultado * 100) / 100;

        imcArredondado.toString();

        if (imcArredondado <= 1) {
            alert("Os valores inseridos não são válidos.");
        } else {
            return ( // não retorna
                <div>
                    {imcArredondado}
                </div>
            )
        }
    }

    return (
        <div class="container">
            <h1>Calculadora de IMC</h1>
            <form>
                <input type="number" placeholder="Digite sua altura" required onChange={evento => setAltura(evento.target.value)} />
                <input type="number" placeholder="Digite seu peso" required  onChange={evento => setPeso(evento.target.value)}/>
                <button type="button" onClick={evento => calculo()}>
                    Calcular
                </button>
            </form>
        </div>
    )
}

export default Form;


// p / h^2 | calculo imc

// descobrir como retornar o imcArredondado para o html | objetivo atual

// https://www.programasaudefacil.com.br/calculadora-de-imc | link imc calculator example