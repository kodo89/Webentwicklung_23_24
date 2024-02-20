
export default function MyNestedComponent(props) {
    if (props.componentVis === true){
        return(
            <div
            style={
                {
                    color: props.color,
                    backgroundColor: props.backgroundCol
                }
            }>Ich bin eine verschachtelte Komponente</div>
        );
    } else{
        return null;
    }
}




