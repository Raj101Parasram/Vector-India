import React, { useState } from 'react'
import axios from 'axios'

let IssueBook=()=>{

// Store form data
  const [formdata, setFormdata] = useState({
    _id: "",
    pin: ""
  })

  // Store error message
  const [msg, setMsg] = useState("")

  // Store book details when found
  const [bookdata, setBookdata] = useState(null)

  // Runs when user types
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  // Runs when user clicks Issue Book button
  const handlesubmit = async(e) => {
    e.preventDefault()
    try
    {
      let result = await axios.post(
        "http://localhost:5000/issuebook",
        formdata
      )

      // If book found — show book details
      if(result.data.title)
      {
        setBookdata(result.data)
        setMsg("")
      }
      else
      {
        // Show error message
        setMsg(result.data.msg)
        setBookdata(null)
      }
      // Clear form
      setFormdata({ _id: "", pin: "" })
    }
    catch
    {
      setMsg("Error connecting to server")
    }
  }

    return(
        <div style={styles.container}>

      <h2 style={styles.heading}>📚 Issue Book</h2>

      {/* Show error message */}
      {msg && <p style={styles.errormsg}>{msg}</p>}

      <form onSubmit={handlesubmit} style={styles.form}>

        <input
          type="text"
          name="_id"
          placeholder="Enter ISBN Number"
          value={formdata._id}
          onChange={handlechange}
          style={styles.input}
        />
        <input
          type="password"
          name="pin"
          placeholder="Enter Pin"
          value={formdata.pin}
          onChange={handlechange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Issue Book
        </button>

      </form>
      {/* Show book details if found */}
      {bookdata &&
        <div style={styles.card}>

          <h3 style={styles.cardtitle}>✅ Book Details</h3>

          <p><b>ISBN : </b>{bookdata._id}</p>
          <p><b>Title : </b>{bookdata.title}</p>
          <p><b>Author : </b>{bookdata.author}</p>
          <p><b>Status : </b>{bookdata.status}</p>

        </div>
      }

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
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  errormsg: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#fadbd8',
    color: '#e74c3c',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  card: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#d5f5e3',
    borderRadius: '10px',
    lineHeight: '2'
  },
  cardtitle: {
    color: '#27ae60',
    marginBottom: '10px'
  }
}

export default IssueBook