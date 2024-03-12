
import MyNestedComponent from "./MyNestedComponent";

export default function MyParentComponent(){
    let color = 'purple'
    let componentVisibility = true
    return(
        <div>
            <h1>Ich bin die Parent Komponente </h1>
            <MyNestedComponent 
                color = {color}
                componentVisibility = {componentVisibility}
            />
            
        </div>

    );
}