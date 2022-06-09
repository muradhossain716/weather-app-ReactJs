import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  let [datas, setDatas] = useState([]);

async function abc(){
  let data = await axios.get("https://jsonplaceholder.typicode.com/todos/");
  console.log(data,'from axio');
  setDatas(data.data)
}

// const abc=async ()=>{
//   let data = await axios.get("https://jsonplaceholder.typicode.com/todos/");
//   // console.log(data.data);
//   return data;
// }
  useEffect(() => {
    abc();
    
    },[]);
    console.log(datas,'from datas')
  return (
    //map dara value return kore.return kora value app er return k dibe... sei value ata print korbe
     <>
     {
       datas.map(el=><h1>{el.title}</h1>)
     }
     </>
  );
}

export default App;
