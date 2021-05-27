import * as React from "react"
import { useState } from "react"
import "../styles/index.css"

const IndexPage = () => {
  const [result, setResult] = useState('')
  const [total, setTotal] = useState(0)
  const [answers, setAnswers] = useState(0)

  const handleTotal = event => {setTotal(event.target.value)}
  const handleAnswers = event => {setAnswers(event.target.value)}
  const handleResult = () => {
    let resultString = ((answers/total)*100).toFixed(1)

    setResult(resultString)
    console.log(resultString > 75)
  }
  
  return (
  <main className="mx-auto my-2">
    <h1>Calculadora de Acertos</h1>
    <section className="mt-4 shadow-md">
      <div className="mb-6">
        <label htmlFor="total">Qual a quantidade <b>total</b> de questões?</label>
        <input id="total" className="shadow-sm" type="number" min="0" max="999" value={total} onChange={handleTotal}></input>
      </div>
      <div className="mb-6">
        <label htmlFor="answers">Quantas questões <b>você acertou</b>?</label>
        <input id="answers" className="shadow-sm" type="number" min="0" max={total} value={answers} onChange={handleAnswers}></input>
      </div>
      <button onClick={() => {handleResult()}}>Calcular resultado 🔥</button>
      {(result >= 100) && (
        <div className="alert-yellow mt-6">
          <p>😬 Esses valores não deram um resultado válido, tente digitar novamente!</p>
        </div>
      )}
      {(result >= 75 && result < 100 && result != 0) && (
        <div className="alert-green mt-6">
          <p>😄 Sensacional, seu resultado foi: <b>{result}%</b></p>
        </div>
      )}
      {(result >=50 && result < 75 && result != 0) && (
        <div className="alert-yellow mt-6">
          <p>😀 Muito bem, seu resultado foi: <b>{result}%</b></p>
        </div>
      )}
      {(result < 50 && result != 0) && (
        <div className="alert-orange mt-6">
          <p>🙂 Não desista, seu resultado foi: <b>{result}%</b></p>
        </div>
      )}
      
    </section>
  </main>
)}

export default IndexPage
