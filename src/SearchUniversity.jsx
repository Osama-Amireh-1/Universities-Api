
function SearchUniversity({university,UniversitySearch}) {
  return (
    <>
    
<div className="container-fluid d-flex justify-content-center align-items-center">
<input className="form-contro me-2" type="search" placeholder="Search university" aria-label="Search" 
value={university} onChange={UniversitySearch}  style={{
  width: "100%",
  maxWidth: "250px",
  padding: "12px 20px",
  borderRadius: "25px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
}}/>
</div>
    
    </>

)
}

export default SearchUniversity