
function Navbar({ location, onLocationChange, onSearchSubmit }) {
  return (
    <> <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container-fluid">
    <a className="navbar-brand fw-bold text-Dark">Explore Universities</a>
      <div className="container-fluid d-flex justify-content-center align-items-center">
     <form className="d-flex" onSubmit={onSearchSubmit}>
      <input className="form-control me-2" type="search" placeholder="Enter country" aria-label="Search" value={location} 
                onChange={onLocationChange} style={{
                  width: "300px",
                  borderRadius: "25px",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                }}/>
       <button className="btn btn-outline-success" type="submit" >Search</button>
     </form>
  </div>
  </div>

</nav></>
  )
}

export default Navbar