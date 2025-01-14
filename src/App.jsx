import axios, { Axios } from "axios"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import SearchUniversity from "./SearchUniversity";
import UniversityList from "./UniversityList";

function App() {
    const [universities,SetUniversities]=useState([])
    const [Location,setLocation]=useState("")
    const [uni,setSreachUniversity]=useState("");
    async function fetchUniversityInfo(e)
    {
        e.preventDefault(); 
        Location.trim()
        const res = await axios.get(`http://universities.hipolabs.com/search?country=${Location}`);
        SetUniversities(res.data);
        console.log(res.data)
          setLocation("")
    }
    function hadlelocation(event)
    {
        setLocation(event.target.value);
    }
    function handleUniversitySearch(event)
    {
      setSreachUniversity(event.target.value)
    }


    return(
        <>
   <Navbar  location={Location}
        onLocationChange={hadlelocation}
        onSearchSubmit={fetchUniversityInfo}/>
<div className="container mt-5">
<h3 className="text-center">Universities</h3>
        <p className="text-center mb-5">
        After selecting a country, you can search for universities by name. The list of universities will automatically filter as you type.
        </p>
</div>
<SearchUniversity
university={uni}
UniversitySearch={handleUniversitySearch}
/>
<UniversityList universities={universities} 
filter ={uni} />



        </>
    )
 
}

export default App
