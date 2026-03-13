import './App.css';
import Card from './component/Card';
 function App() {
  const data=[{
        name:"Aman",
        day:"08",
        month:"Mar",
        year:"2004"
  },
    {
       name:"Ashu",
        day:"15",
        month:"Mar",
        year:"2006"
    },
  {
     name:"Aditya",
        day:"28",
        month:"Dec",
        year:"2006"
  }]
   return (
     <div>
      <Card data={data}></Card>
     </div>
   );
 }

 export default App;
