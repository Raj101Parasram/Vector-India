import { Link } from 'react-router-dom'

let Navbar=()=>{
    return(    
    <nav style={styles.nav}>

      {/* App Title */}
      <h2 style={styles.title}>📚 Library System</h2>

      {/* Navigation Links */}
      <div>
        <Link to="/" style={styles.link}>
          Add Book
        </Link>

        <Link to="/issuebook" style={styles.link}>
          Issue Book
        </Link>
      </div>

    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
    title: {
    color: 'white',
    margin: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px',
    padding: '8px 15px',
    backgroundColor: '#3498db',
    borderRadius: '5px'
  }
}

export default Navbar