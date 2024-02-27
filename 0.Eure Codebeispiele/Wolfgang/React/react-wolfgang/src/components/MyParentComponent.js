import MyNestedComponent from "./MyNestedComponent";



export default function MyParentComponent(){
    
let color = "red";
let componentVisibility = true;
    return (

        


        <div>
            <h1>MyParentComponent</h1>

            <MyNestedComponent color={color} componentVisibility={componentVisibility}/>

        </div>
    )
}

