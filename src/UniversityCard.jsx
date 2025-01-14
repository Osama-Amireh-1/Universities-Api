
function UniversityCard({ university }) {
  return (
<>
<div className="card" style={{width: "18rem", height: "18rem", borderRadius: "10px",
      border: "1px solid #ddd",}}>
        <div className="card-body">
          <h5 className="card-title text-primary">{university.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{university.country}</h6>
          <p className="card-text">This university is located in {university.country}. Explore more details on their official website.</p>
          <a href={university.web_pages[0]} className="btn btn-primary" target="_blank" rel="noopener noreferrer">  Visit Website</a>
        </div>
      </div>
</>

)
}

export default UniversityCard