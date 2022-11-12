import React, {useState} from 'react';
import '../App.css'

let apiUrl = "https://mlb-card-collection-api.onrender.com";

export default function CardInput () {

    const [formData, setFormData] = useState("")

    const onSubmitForm = async(e) => {
    e.preventDefault();
      
        try {
            const body = {formData};
            const response = await fetch(`${apiUrl}/api/addBatters`, {
                method: "POST",
                header: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        }catch (err) {
            console.error(err);
        }
    }


    return <>
       <form>
        <div>
            <label>First Name</label>
            <input type='text' value={formData.first_name} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>Last Name</label>
            <input type='text' value={formData.last_name} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>AVG</label>
            <input type='decimal' value={formData.AVG} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>HR</label>
            <input type='decimal' value={formData.HR} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>RBI</label>
            <input type='decimal' value={formData.RBI} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>OPS</label>
            <input type='decimal' value={formData.OPS} onChange={e => setFormData(e.target.value)}/>
            <br />
            <label>Image</label>
            <input type='text' value={formData.image} onChange={e => setFormData(e.target.value)}/>
            <br />
            <button onClick={onSubmitForm} type='submit'>Submit Card</button>
        </div>
       </form>
    </>
        
      ;
}