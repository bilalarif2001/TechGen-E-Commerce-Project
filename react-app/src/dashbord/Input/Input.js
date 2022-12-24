const Input = (props) => {
  return (
    <input
      style={props.style}
      min={props.min}
      required={props.required}
      max={props.max}
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
Input.defaultProps = {
  className:
    " border-4 border-gray-100  rounded-xl w-5/12 p-2 outline-0 focus:border-blue-500 ",
};
export default Input;
