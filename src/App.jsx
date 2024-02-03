import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from 'react-bootstrap'

function App() {
  const [name, setName] = useState(null)
  const [id, setId] = useState(null)

  const saveDate = () => {
    console.log('Ok bb');
    fetch('https://aa780059276645aea9ae85f6fca452d8.weavy.io/api/users', {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "Uid": id,
      }),
      headers: {
        'Authorization': 'Bearer wys_UTBmPc3P3KyeQ2quSeZjat133HTz1W2qZCHG',
        'content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const getDate = () => {
    console.log('Ok bb');
    fetch('https://aa780059276645aea9ae85f6fca452d8.weavy.io/api/users', {
      method: 'GET',

      headers: {
        'Authorization': 'Bearer wys_UTBmPc3P3KyeQ2quSeZjat133HTz1W2qZCHG',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  return (
    <>
      <form>
        <label>
          Uid:
          <input
            type="text"
            name="name"
            onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text"
            name="name"
            onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="button"
          value="Save"
          onClick={saveDate} />
        <input type="button"
          value="Get Data"
          onClick={getDate} />
      </form>
    </>
  )
}

export default App
