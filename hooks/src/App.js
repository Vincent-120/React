import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css'

const App = () =>{
  const [jokes, setJokes] = useState ([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  const API = 'http://api.icndb.com/jokes/'
  useEffect( () => {
    axios.get(API).then(res =>{
      setJokes(res.data);
      setLoad(true);
    })
    .catch(err =>{
      setError(err.message);
      setLoad(true);
    })
  },[])
  
  if (load) {
    return(
      <div className="box">
        <ul>{error ? <li>{error.message}</li> : jokes.value.map((fact) => <li className="joke" id={fact.id}>{fact.joke}</li>)}</ul>
      </div>
    );
  }
  else{
    return(
      <div>Loading...</div>
    )
  }
};
export default App;