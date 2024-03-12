
export default function MyNestedComponent (props){
    if(props.componentVisibility)
    return(
        <div style = {
            {color: props.color}
        }>
            <h1>Ich bin eine verschachtelte Komponente </h1>
        </div>
    )
    else{
        return null
    };
}