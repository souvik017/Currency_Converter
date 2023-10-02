import  { useEffect, useState } from 'react'

const CurrencyInfo = (currency) => {
      let Api =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
      const [data , setdata] = useState({})
    useEffect(()=>{
        fetch(Api)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
    } ,[currency , Api])
 
    return data;
}

export default CurrencyInfo;
