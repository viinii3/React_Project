import { useState } from 'react'
import './app.css'

function App() {

const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [imc, setImc] = useState('');
const [result, setResult] = useState('');


function Altura(e){
  setAltura(e.target.value)
}

function Peso(e){
  setPeso(e.target.value)
}

const alturaCm = altura / 100
function CalculaIMC() {
  const calculaIMC = peso / (alturaCm * alturaCm);
  setImc(calculaIMC.toFixed(1));

  if (altura === '' || peso === '' || altura === '0' || peso === '0') {
    setResult('Insira os dados corretamente');
  } else if (imc < 18.5) {
    setResult('Abaixo do peso');
  } else if (imc >= 18.5 && imc < 25) {
    setResult('Peso ideal');
  } else if (imc >= 25 && imc < 30) {
    setResult('Acima do peso');
  } else if (imc >= 30 && imc < 40) {
    setResult('Obesidade grau I');
  } else if (imc >= 40 && imc <= 60) {
    setResult('Obesidade grau II (severa)');
  } else {
    setResult('Obesidade grau III (mórbida)');
  }
}

  return (
    <>
    <div className="container">
        <div className='altura'>
          <h3>Altura (cm):</h3>
          <input type="number" onChange={Altura} value={altura}/>
        </div>
        <div className='peso'>
          <h3>Peso (kg):</h3>
          <input type="number" onChange={Peso} value={peso}/>
        </div>
        <button className='button' onClick={CalculaIMC}>Calcular IMC</button>
        <div className='resultado'>
          <p className='name1'>O valor do seu IMC é de: <span>{imc}</span></p>
          <p>logo: <span>{result}</span></p>
        </div>
    </div>
    </>
  )
}

export default App
