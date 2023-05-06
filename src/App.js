import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Main from './pages/Main';
import Form from "./pages/Form";
import { Route, Routes } from 'react-router-dom';

const apiURL = 'https://travel-buddy-backend.herokuapp.com'

function App() {

  const [items, setItems] = useState([])

  const getFoods = async () => {
    const response = await fetch(apiURL + '/travel/')
    const data = await response.json()
    setItems(data)
  }

  useEffect(() => {
    getFoods()
  }, [])

  const handleFormSubmission = async (data, type) => {
    if (type === 'new') {
      const response = await fetch(apiURL + '/travel/', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getFoods()
    } else {
      const response = await fetch(`${apiURL}/travel/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getFoods()
    }
  }

  const deleteFood = async (id) => {
    const response = await fetch(`${apiURL}/travel/${id}/`,
      {
        method: 'delete'
      }
    )
    getFoods()
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/travel' element={<Main items={items} deleteFood={deleteFood} />} />
        <Route
          path="/new"
          element={<Form handleSubmit={handleFormSubmission} buttonLabel='Add Blog' formType='new' items={items} />}
        />
      </Routes>
    </div>
  )
}

export default App;
