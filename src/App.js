import { useEffect } from "react";
import { useState } from "react"

export default function App(){
  const [amount,setamount]=useState('');
  const [from ,setfrom]=useState('USD')
  const [to,setto]=useState('USD');
  const [converted,setconverted]=useState('');
useEffect(function(){
 async function convert(){
  const res=await fetch(`https://api.frankfurter.app/latest?amount=${amount===0 ? '':amount}&from=${from}&to=${to}`);
  const data=await res.json();
  
  setconverted(data.rates[to]);
  
  

 }
 
 if(from===to) return setconverted(amount);
 convert()
 
 

},[amount,to,from]);

  return <div className="gap-24 flex flex-col mt-40 items-center justify-center">
    <Calculate 
     amount={amount}
      setamount={setamount}
       from={from}
       setfrom={setfrom} 
       to={to}
       setto={setto} />
       <h2 className=" font-bold text-lg text-blue-50">{converted}</h2>
  </div>
}
function Calculate({amount,setamount,from,setfrom,to,setto}){
  return <div className="flex ">
    <input  className=" bg-blue-200 p-2  outline-none" value={amount} onChange={e=>setamount(Number(e.target.value))} />
    <select className="bg-blue-200  outline-none" value={from} onChange={e=>setfrom(e.target.value)}>
    <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      
    </select>
     <select className="bg-blue-200  outline-none" value={to} onChange={e=>setto(e.target.value)}>
     <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
    
    </select>
  </div>
}