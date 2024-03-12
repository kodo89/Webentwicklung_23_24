import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link} from "react-router-dom";


export default function Menu() {
    const navigate = useNavigate();

  return (
    <div>
      <Link to = "randomjoke">Zum Zufallswitz</Link>
      <br/>
      <button onClick = {() => navigate("specificjoke/1")}>Zum Witz 1</button>
      <br/>
      <button onClick = {() => navigate("filteredjokes?type= Science")}>Zu den Science Jokes</button>
      <br/>
    </div>
  );
};
