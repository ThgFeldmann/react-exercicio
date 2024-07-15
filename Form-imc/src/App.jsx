import { useEffect, useState } from "react";

function App() {

  let [altura, setAltura] = useState('');
  let [peso, setPeso] = useState('');

  var imc;
  
  const calculo = () => { // arrow function q calcula o imc
      imc = Math.round(peso / (altura * altura) * 100) / 100;
  }

  function validaValores() {
    if (altura, peso == ('')) {
      imc = 0;
    } else {
      calculo();
    }
    return (
      <h3>Seu IMC é: {imc}</h3>
    )
  }

  return(
    <div class="container">
      <h1>Calculadora de IMC</h1>
        <form>
          <input type="number" placeholder="Digite sua altura" required onChange={evento => setAltura(evento.target.value)} />
          <input type="number" placeholder="Digite seu peso" required  onChange={evento => setPeso(evento.target.value)}/>
        </form>
        {validaValores()}
    </div>
  )
}

export default App

// p / h^2 | calculo imc

// mostrar a tabela de imc | objetivo atual

// https://www.programasaudefacil.com.br/calculadora-de-imc | link imc calculator example