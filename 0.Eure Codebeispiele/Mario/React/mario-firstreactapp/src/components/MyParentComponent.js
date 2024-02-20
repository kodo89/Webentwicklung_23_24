import MyNestedComponent from "./MyNestedComponent";


export default function MyParentComponent(){

    let color = "green";
    let componentVisibility = true;
    let backgroundColor = "yellow";

    return (
        <div>Ich bin die Parent Komponente
            <MyNestedComponent 
            color = {color}
            componentVis = {componentVisibility}
            backgroundCol = {backgroundColor}
            />
        </div>
    )
}



