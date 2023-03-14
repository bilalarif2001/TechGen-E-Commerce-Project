
const Input = (props) => {
    let varient;
    if (props.varient==="login") varient="border-4 border-gray-100 w-full rounded-sm p-2 focus:outline-yellow-500"
  return (
    <input
      value={props.value}
      type={props.type}
      className={varient}
      placeholder={props.placeholder}
      onChange={props.onChange}
      min={props.min}
      max={props.max}
      minLength={props.minLength}
      maxLength={props.maxLength}
      required
    />
  );
};
Input.defaultProps = {
  className: " border-4 border-gray-100 w-24 rounded-sm w-8/12 p-2 focus:outline-0",
};
export default Input;