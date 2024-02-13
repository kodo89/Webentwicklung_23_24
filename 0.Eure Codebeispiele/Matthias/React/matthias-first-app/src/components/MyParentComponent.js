import MyNestedComponent from "./MyNestedComponent";

const color = "#0f58d6";
const componentVisibility = true;

export default function MyParentComponent() {
  return(
    <div>
      Ich bin die Parent Komponente.
      <MyNestedComponent
        color={color}
        componentVisibility={componentVisibility} />
    </div>
  )
}