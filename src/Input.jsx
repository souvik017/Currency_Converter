import React, { useId } from 'react'

const Input = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    currencyDisable = false,
    placeholder
  })=> {
    const amountInputId = useId()
    return (
      <>
      
        <div className='bg-white text-black m-auto w-96 p-2 rounded-md'>
          <p className='m-0 font-bold'>{label}</p>
          <input id={amountInputId} className='p-2 outline-0' type ="number" placeholder= {placeholder} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
         
            <select
                    className="rounded-lg px-1 py-1 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
        </div>
  
      </>
    );
  }

export default Input;
