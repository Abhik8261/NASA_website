import React from 'react'
import {Link} from 'react-router-dom'
import NASA from '../../assests/logo.svg'
const Navbar = ({mode,toggleMode}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={NASA} alt="NASA" height="40" style={{ objectFit: 'contain' }}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/apod">Apod</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/mars">Mars Rover</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/neo">NEO Feed</Link>
        </li>
        
      </ul>
      
  <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}  >
  <input className="form-check-input" type="checkbox"onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault" >Enable {`${mode ==='light'?'dark':'light'}`} mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar