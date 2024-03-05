import React, {useState} from "react";

function UserInfoForm(props) {

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(formData.name + "\n" + formData.age + "\n" + formData.email);
  }

  const handleChange = (event, changeItem) => {
    setFormData({...formData, [changeItem]: event.target.value});
  }

  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input type="text" name="name" onChange={(e) => handleChange(e, "name")}/>
        <br/>
        <label>Age</label><br/>
        <input type="number" name="age" onChange={(e) => handleChange(e, "age")}/>
        <br/>
        <label>Email</label><br/>
        <input type="email" name="mail" onChange={(e) => handleChange(e, "email")}/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInfoForm;