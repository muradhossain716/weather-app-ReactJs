
// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import "./weather-app.css";

//  function Weather(){
//     let [data, setData] = useState([]);


//     useEffect(async () => {
//         let data = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    
//         console.log(data)
    
//         console.log(data.data, "my data from database");
//         setData(data.data);
//       }, []);

//     // useEffect( async ()=>{
//     //     let apiData= await axios.get('https://jsonplaceholder.typicode.com/todos/');
//     //     console.log(apiData)
//     // },[])
//   return (<>
//     <div className="card">
//         <div className="inputData">
//             <input type="search" className='inputField' />
//         </div>
//          <div className='info'>
//              <h2 className='location'>
//                 Dhaka
//              </h2>
//              <h1 className='temparature'>
//                 35.8°C
//              </h1>
//              <h3>Min:   | Max: </h3>
//          </div>
//     </div>
//     </>
//   )
// }
// export default Weather;