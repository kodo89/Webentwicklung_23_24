 import React, { useState } from 'react'
 
 export default function Formulare() {
    const [formData, setFormData] = useState({
        name: ' ',
        age: ' ',
        email : ' ',
    });

 
    const handleChangeName = (e) => {
        setFormData ({... formData, name: e.target.value});
    };

    const handleChangeAge = (e) => {
        setFormData ({... formData, age: e.target.value});
    };

    const handleChangeEmail = (e) => {
        setFormData ({... formData, email: e.target.value});
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name eingegeben: ${formData.name}`)
    };
    
    return(
        <form onSubmit = {handleSubmit}>
            <input 
            type = 'text'
            name = 'name'
            value={formData.name}
            onChange={handleChangeName}
            placeholder= "Benutzername"
            />

            <input
            type='text'
            age = 'age'
            value={formData.age}
            onChange={handleChangeAge}
            placeholder='Age'
            />

            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeEmail}
            placeholder='Email'
            />

            <button type='submit'>Absenden</button>
        </form>
    );
};
