const TextArea = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      className={props.className}
      rows={props.rows}
      onChange={props.onChange}
    />
  );
};
TextArea.defaultProps = {
  className: " border-4 border-gray-100  rounded-xl w-8/12 p-2 focus:outline-0",
};
export default TextArea;
