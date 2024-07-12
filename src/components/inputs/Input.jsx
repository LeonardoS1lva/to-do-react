import "./Input.css"

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
  )
}

export default Input