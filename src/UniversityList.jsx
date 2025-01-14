import UniversityCard from "./UniversityCard"
function UniversityList({universities, filter }) {
  
    const filteredUniversities =universities.filter((f)=> f.name.toLowerCase().startsWith(filter.toLowerCase()))
    filteredUniversities.sort();
    return (

    <>

  <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <div className="m-3">
              <UniversityCard university={university}/>
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-5">
            No universities found.
          </p>
        )}
      </div>
    </div>
    </>

)
}

export default UniversityList