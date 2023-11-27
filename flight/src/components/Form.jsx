import { useState, useEffect } from 'react'

function Form(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submission
        event.preventDefault();

        // pass the search term to moviesearch prop (the method that will search)
       props.flightData(formData.searchterm);
    }

    return (
        <div>
            <center><form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
            <h3>Search: {formData.searchterm}</h3></center>
          
        </div>
    )
}

export default Form