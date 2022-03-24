import React, {useState} from 'react';

import './index.css';

/*import imgUnder from '../src/assets/under.png';
import imgOver from '../src/assets/over.png';
import imgHealthy from '../src/assets/healthy.png';*/

function App() {

  //state
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Insira um peso e altura válidos, por favor')
    } else {
      let bmi = (weight/(height * height))
      setBmi(bmi.toFixed(1))
      //login for message
      if (bmi < 25){
        setMessage('Você está abaixo do peso')
      }else if (bmi >= 25 && bmi < 30){
        setMessage('Você está saudável')
      }else{
        setMessage('Você está com excesso de peso')
      }

    }
  }
  //show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/under.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/over.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>Calculadora IMC</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Peso (Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Altura (m)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Enviar</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Recarregar</button>
          </div>
        </form>

        <div className='center'>
          <h3>Seu IMC é: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
