import "./myButton.css";
function MyButton(props) {
  console.log(props)
  return <button className='myButton'>{props.text}</button>;
}

export default MyButton;
