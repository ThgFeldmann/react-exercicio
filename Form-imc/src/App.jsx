import { useState } from "react";

function App() {

  let [altura, setAltura] = useState('');
  let [peso, setPeso] = useState('');

  var imc;
  
  const calculo = () => { // arrow function q calcula o imc
      imc = Math.round(peso / (altura * altura) * 100) / 100;
  }

  function validaValores() {
    console.log("tarefa inicializada");
    if (altura !== ('') && peso !== ('')) {
      calculo();
      indicaNaTabela();
      return (
        <h3 className="text-center mb-4 border border-dark rounded bg-success text-white">Seu IMC é: {imc}</h3>
      )
    } else {
      imc = '';
    }
    console.log("tarefa finalizada");
  }

  function indicaNaTabela() {
    console.log("tarefa inicializada");
    if (imc >= 40) {
      let selectedRow = document.getElementById("linha-5");
      selectedRow.classList.add('highlited');
      selectedRow = '';
      console.log("erro linha-5");
    } else if (imc >= 30) {
      let selectedRow = document.getElementById("linha-4");
      selectedRow.classList.add('highlited');
      selectedRow = '';
      console.log("erro linha-4");
    } else if (imc >= 25) {
      let selectedRow = document.getElementById("linha-3");
      selectedRow.classList.add('highlited');
      selectedRow = '';
      console.log("erro linha-3");
    } else if (imc >= 18,5) {
      let selectedRow = document.getElementById("linha-2");
      selectedRow.classList.add('highlited'); // erro "TypeError: Cannot read properties of undefined (reading 'add')"
      selectedRow = '';
      console.log("erro linha-2");
    } else (imc > 2 && imc <= 18.5) ;{
      let selectedRow = document.getElementById("linha-1");
      selectedRow.classList.add('highlited');
      selectedRow = '';
      console.log("erro linha-1")
    }
    console.log("tarefa finalizada");
  }

  return(
    <div class="container">
      <h1 className="text-center">Calculadora de IMC</h1>
        <form class="row d-flex justify-content-center">
          <input id="first-input" type="number" placeholder="Digite sua altura" onChange={evento => setAltura(evento.target.value)} />
          <input type="number" placeholder="Digite seu peso" onChange={evento => setPeso(evento.target.value)}/>
        </form>
        {validaValores()}
        <div className="border rounded border-dark"> {/* tabela */}
          <div className="row m-3 text-center border-bottom border-dark"> {/* titulo da tabela */}
            <h2>Tabela de interpretação do IMC</h2>
          </div>
          <div className="ms-5"> {/* colunas */}
            <div className="row" id="categorias"> {/* subtitulos da tabela */}
              <div className="col-md-4">
                <h4>IMC</h4>
              </div>
              <div className="col-md-4">
                <h4>Classificação</h4>
              </div>
              <div className="col-md-4">
                <h4>Grau de obesidade</h4>
              </div>
            </div>
            <hr />
            <div className="row " id="linha-1"> {/* < 18,5 */}
              <div className="col-md-4">
                <h5>Menor que 18,5</h5>
              </div>
              <div className="col-md-4">
                <h5>Magreza</h5>
              </div>
              <div className="col-md-4">
                <h5>0</h5>
              </div>
            </div>
            <div className="row " id="linha-2"> {/* entre 18,5 até 24,9 */}
              <div className="col-md-4">
                <h5>Entre 18,5 e 24,9</h5>
              </div>
              <div className="col-md-4">
                <h5>Normal</h5>
              </div>
              <div className="col-md-4">
                <h5>0</h5>
              </div>
            </div>
            <div className="row " id="linha-3"> {/* entre 25,0 até 29,9 */}
              <div className="col-md-4">
                <h5>Entre 25,0 e 29,9</h5>
              </div>
              <div className="col-md-4">
                <h5>Sobrepeso</h5>
              </div>
              <div className="col-md-4">
                <h5>I</h5>
              </div>
            </div>
            <div className="row " id="linha-4"> {/* entre 30,0 até 39,9 */}
              <div className="col-md-4">
                <h5>Entre 30,0 e 39,9</h5>
              </div>
              <div className="col-md-4">
                <h5>Obesidade</h5>
              </div>
              <div className="col-md-4">
                <h5>II</h5>
              </div>
            </div>
            <div className="row " id="linha-5"> {/* > 40,0 */}
              <div className="col-md-4">
                <h5>Maior que 40,0</h5>
              </div>
              <div className="col-md-4">
                <h5>Obesidade Grave</h5>
              </div>
              <div className="col-md-4">
                <h5>III</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App

// p / h^2 | calculo imc

// indicar o imc na tabela | objetivo atual

// o codigo é realizado a cada ação nos inputs | erro
// criar um btn de submit para os inputs, onde o JS será realizado com o clique | solução? Remover "onChange"

// https://www.programasaudefacil.com.br/calculadora-de-imc | link imc calculator example
