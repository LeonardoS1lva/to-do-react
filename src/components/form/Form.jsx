import Button from "../buttons/Button";
import Input from "../inputs/Input";

import "./Form.css";

function Form(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Button texto={props.texto} onClick={props.onClick} />
    </form>
  );
}

export default Form;
