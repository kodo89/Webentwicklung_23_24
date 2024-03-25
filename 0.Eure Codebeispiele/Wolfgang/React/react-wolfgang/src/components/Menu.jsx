import react, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function MenuComponent(){
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("SpecificJoke")}>Random Joke</button>
        </div>
    )
}
