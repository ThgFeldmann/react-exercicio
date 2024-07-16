import { useState } from "react";

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
      <h3 className="text-center mb-4 border border-success">Seu IMC é: {imc}</h3>
    )
  }

  return(
    <div class="container">
      <h1 className="text-center">Calculadora de IMC</h1>
        <form class='p-4'>
          <input className="me-3" type="number" placeholder="Digite sua altura" required onChange={evento => setAltura(evento.target.value)} />
          <input type="number" placeholder="Digite seu peso" required  onChange={evento => setPeso(evento.target.value)}/>
        </form>
        {validaValores()}
        <div className="border rounded border-dark"> {/* tabela */}
          <div className="row m-3 text-center border-bottom border-dark">
            <h2>Tabela de interpretação do IMC</h2>
          </div>
          <div className="ms-5"> {/* colunas */}
            <div className="row border-bottom"> {/* categorias */}
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
            <div className="row">
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
            <div className="row">
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
            <div className="row">
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
            <div className="row">
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
            <div className="row">
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

// alinhar os inputs | objetivo atual

// https://www.programasaudefacil.com.br/calculadora-de-imc | link imc calculator example