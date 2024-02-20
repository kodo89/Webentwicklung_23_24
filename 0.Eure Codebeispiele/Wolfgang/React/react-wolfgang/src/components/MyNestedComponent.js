export default function MyNestedComponent(props){


if(props.componentVisibility === true){
    return (
        <div>
            <h1 style={{
                color:props.color
            }}>MyNestedComponen</h1>
            
            <h2>Hallo Welt</h2>
            </div>

    ) 
  
}
}
