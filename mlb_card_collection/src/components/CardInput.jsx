import React, {useState} from 'react';
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import '../App.css'

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function CardInput () {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        AVG: "",
        HR: "",
        RBI: "",
        OPS: "",
        image: ""
    })

    const handleInputChange = (e) => {
        e.preventDefault()
        const newData = {...formData}
        newData[e.target.id] = e.target.value
        setFormData(newData)
        console.log(newData);
    }

    const submit = (e) => {
        e.preventDefault();
        Axios.post(`${apiUrl}/api/addBatters`, {
            first_name: formData.first_name,
            last_name: formData.last_name,
            AVG: formData.AVG,
            HR: parseInt(formData.HR),
            RBI: parseInt(formData.RBI),
            OPS: parseInt(formData.OPS),
            image: formData.image
        })
        .then(<Navigate to="/"/>)
    }

    return <>
       <form onSubmit={(e) => submit(e)}>
        <div>
            <label>First Name</label>
            <input type='text' placeholder="First Name" id="first_name" value={formData.first_name} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>Last Name</label>
            <input type='text' placeholder="Last Name" id="last_name" value={formData.last_name} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>AVG</label>
            <input type='decimal' placeholder="AVG" id="AVG" value={formData.AVG} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>HR</label>
            <input type='decimal' placeholder="HR" id="HR" value={formData.HR} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>RBI</label>
            <input type='decimal' placeholder="RBI" id="RBI" value={formData.RBI} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>OPS</label>
            <input type='decimal' placeholder="OPS" id="OPS" value={formData.OPS} onChange={(e) => handleInputChange(e)}/>
            <br />
            <label>Image</label>
            <input type='text' placeholder="image" id="image" value={formData.image} onChange={(e) => handleInputChange(e)}/>
            <br />
            <button type='submit'>Submit Card</button>
        </div>
       </form>
    </>
        
      ;
}