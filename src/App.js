import { useState } from 'react';
import './App.css';

function App() {
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [saldo, setSaldo] = useState(0);

  const calcularSaldo = () => {
    setSaldo(receita - despesa);
  }

  return (
    <div className="App">
      <h1>Calculadora de Orçamento Pessoal</h1>

      <div>
        <label>Receita: </label>
        <input
          type="number"
          value={receita}
          onChange={(e) => setReceita(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Despesa: </label>
        <input
          type="number"
          value={despesa}
          onChange={(e) => setDespesa(Number(e.target.value))}
        />
      </div>

      <button onClick={calcularSaldo}>Calcular Saldo</button>

      <h2>Saldo: {saldo}</h2>
    </div>
  );
}
export default App;