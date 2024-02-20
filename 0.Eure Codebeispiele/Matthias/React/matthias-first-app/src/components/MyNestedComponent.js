export default function MyNestedComponent({color, componentVisibility}) {

  if(componentVisibility) {
    return(
        <div style={{
          color: color
        }}>
          Ich bin eine verschachtelte Komponente.
        </div>
    )
  }
}