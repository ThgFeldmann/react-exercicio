import { useState } from "react";

const Form = () => {
    let [altura, setAltura] = useState('');
    let [peso, setPeso] = useState('');
    
    const calculo = () => {
        const resultado = peso / (altura * altura);

        console.log(resultado);
    }
    
    // function calculo(altura, peso) {
    //     console.log(peso / (altura * altura));
    //     // const calculoImc = peso / (altura * altura);
    //     // return calculoImc;
    // }

    return (
        <div class="container">
            <h1>Calculadora de IMC</h1>
            <form>
                <input type="number" placeholder="Digite sua altura" required onChange={evento => setAltura(evento.target.value)} />
                <input type="number" placeholder="Digite seu peso" required onChange={evento => setPeso(evento.target.value)} />
                <button type="button">
                    Calcular
                </button>
                {calculo()}
                {altura}
                {peso}
            </form>
        </div>
    )
}

export default Form;


// p / h^2 | calculo imc

// input.value => var => calculo => return resultado | objetivo

// https://www.programasaudefacil.com.br/calculadora-de-imc | link imc calculator example