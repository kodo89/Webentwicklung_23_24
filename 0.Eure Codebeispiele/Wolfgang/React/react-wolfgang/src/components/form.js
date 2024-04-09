import React, {useState} from "react";

export default function MyForm(){
    const [formData, setFormData] = useState({
name:"",
email:"",
age:""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
const handleSubmit = (event)  => {
    event.preventDefault();
    console.log(formData);
}
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{color:"red"}}>Name:</label><br />
            <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange} required /><br /><br />

            <label htmlFor="email">E-Mail:</label><br />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

            <label htmlFor="age">Alter:</label><br />
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required /><br /><br />

            <input type="submit" value="Absenden" />
        </form>
             
    );
}