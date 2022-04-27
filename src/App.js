import React,{useState} from 'react'
import logo from './logo.svg';
import './index.css';



function App() {

  // states
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] =       useState("")
    const [message, setMessage] = useState("")

     let calcBmi = (event) => {
       event.preventDefault()

       if(weight === 0 || height === 0) {
         alert('please enter a valid weight and height')

       }else {
         let bmi = (weight / ( height/100)**2)
         setBmi(bmi.toFixed(1))
      

     // logic for alert message

    if(bmi < 18.5 ){

      setMessage('You are under weight')

    }else if(bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are healthy')
    
    }else if(bmi >= 25 && bmi < 29.9) {
      setMessage('You are over weight')
    
    }else {
      setMessage('Obesity')

    }
  }
}

let reload = () => {
  window.location.reload()
}


  return (
    <div className="app">
      <div className="container">
        <h2 className="center"> BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (KG)</label>
            <input value = {weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height  (CM)</label>
            <input value = {height} onChange={(e) => setHeight(e.target.value)}/>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="rdn" onClick={reload} type="submit">Reload</button>
            </div>
          </div>
        </form>
        <div className="center">BMI is : {bmi}</div>
        <p className='center'>{message}</p>
      </div>
     
    </div>
  );
}

export default App;
