import './App.css'
import {useState} from 'react'
import Button from '@mui/material/Button'
import FetchedData from './FetchedData';



function App(){
    const [stats, setStats] = useState([]);
    const getData =()=>{
    fetch('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20212022')
    .then((response)=> response.json())
    .then((data)=>{
        {setStats([data])}
    })
    }


    return(
        <div>
            <div className= "Info">
            <h1>The Alex Ovechkin goal tracker</h1>
            <Button onClick={getData} className="button-1"sx={{color:'#F72119'}}>Fetch Stats</Button>
            <h3>How many goals does ovi have?</h3>
            <FetchedData data={stats}/>
            </div>
        </div>
        
    )
}
export default App;