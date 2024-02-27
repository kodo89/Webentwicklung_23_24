

import React from "react";
import { useState } from "react";






export default function Formular(){
    const [formData, setFormData] = useState({
        username: '',
        ageUser: '',
        email: '',
    });


    const handleChange = (event, variable) => {
        setFormData({...formData, [variable]: event.target.value});
    }


    /*
    const handleChangeUsername = (event) => {
        setFormData({...formData, username: event.target.value});
    }

    const handleChangeAgeUser = (event) => {
        setFormData({...formData, ageUser: event.target.value});
    }

    const handleChangeEmail = (event) => {
        setFormData({...formData, email: event.target.value});
    }
    */

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(formData.username + " " + formData.ageUser +" " + formData.email);
    };



    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={() => handleChange("username")}
                //onChange={(event) => handleChange("username")}
                placeholder="Benutzername"
            />
            <input
                type="text"
                name="ageUser"
                value={formData.ageUser}
                onChange={() => handleChange("ageUser")}
                placeholder="Alter"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={() => handleChange("email")}
                placeholder="Email"
            />
            

            <button type="submit">Absenden</button>
        </form>
    );


}





