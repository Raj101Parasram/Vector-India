import React, { useState } from 'react'
import axios from 'axios'

let AddBook=()=>{
    // Store form data
  const [formdata, setFormdata] = useState({
    _id: "",
    title: "",
    author: "",
    pin: "",
    pages: "",
    genre: ""
  })
  // Store message from backend
  const [msg, setMsg] = useState("")

  // Runs when user types in any input
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  // Runs when user clicks Add Book button
  const handlesubmit = async(e) => {

    // Stop page refresh
    e.preventDefault()
  try
    {
      // Send data to backend
      let result = await axios.post(
        "http://localhost:5000/addbook",
        formdata
      )

      // Show message from backend
      setMsg(result.data.msg)
      // Clear form
      setFormdata({
        _id: "",
        title: "",
        author: "",
        pin: "",
        pages: "",
        genre: ""
      })
    }
    catch
    {
      setMsg("Error connecting to server")
    }
}


    return(
    <div style={styles.container}>

      <h2 style={styles.heading}>📖 Add New Book</h2>

      {/* Show message if exists */}
      {msg && <p style={styles.msg}>{msg}</p>}

      <form onSubmit={handlesubmit} style={styles.form}>

        <input
          type="text"
          name="_id"
          placeholder="ISBN Number"
          value={formdata._id}
          onChange={handlechange}
          style={styles.input}
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formdata.title}
          onChange={handlechange}
          style={styles.input}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formdata.author}
          onChange={handlechange}
          style={styles.input}
        />

        <input
          type="password"
          name="pin"
          placeholder="Set Pin"
          value={formdata.pin}
          onChange={handlechange}
          style={styles.input}
        />

        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          value={formdata.pages}
          onChange={handlechange}
          style={styles.input}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formdata.genre}
          onChange={handlechange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Book
        </button>

      </form>
    </div>
  )
}



const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none'
  },
  button: {
    padding: '12px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  msg: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#d5f5e3',
    color: '#27ae60',
    borderRadius: '5px',
    marginBottom: '10px'
  }
}

export default AddBook