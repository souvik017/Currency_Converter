import './App.css'
import Input from "./Input"
import CurrencyInfo from './CurrencyInfo';
import { useState } from 'react';


function App(){
  
  const[amount, setAmount]=useState("");
  const[form , setForm]=useState("usd")
  const[to, setTo]=useState("inr");
  const[convertedAmount , setConvertedAmount]=useState("")

  const CurrencyInfoo = CurrencyInfo(form);
 const options = Object.keys(CurrencyInfoo);

 const Swap = ()=>{
  setForm(to)
  setTo(form)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }
  
 const result=()=>{
 setConvertedAmount((amount * CurrencyInfoo[to]))
 }

  return (
    <>
    <div className="bg-black w-screen h-screen text-white m-auto text-center">
      <div >
        <h1 className='py-12 text-5xl'>Currency Converter</h1>

    <Input
       label="FROM"
       amount={amount}
       currencyOptions={options}
       onCurrencyChange={(currency)=> setForm(currency)}
      selectCurrency={form} 
      onAmountChange={(amount) => setAmount(amount)}
      placeholder="Enter Amount"
    />
 
 <button className='my-6 border-2 py-2 px-4 rounded-md text-white' onClick={Swap}>Swap</button>
  <Input
   label="TO"
   amount={convertedAmount}
   currencyOptions={options}
   onCurrencyChange={(currency)=> setTo(currency) }
   selectCurrency={to} 
   amountDisable
   placeholder="Converted Amount"
   />
 <button className='my-6 border-2 py-3 px-6 rounded-md' onClick={result}>Convert {form.toUpperCase()} to {to.toUpperCase()} </button>
  </div>
  </div>
    </>
  );
}


export default App;
