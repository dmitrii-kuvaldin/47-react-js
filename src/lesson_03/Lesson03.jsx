import MyButton from '../components/myButton/MyButton';

function Lesson03() {
  return (
    <div className='lesson-container'>
      <h2>React props 🔄</h2>
      <span>Способ передачи данных из компонента в компонент от родителя к ребенку</span>
      <p>Мы хотим использовать наш компонент кнопку с разными данными:</p>
      <MyButton text={'click'}/>
      <MyButton text={'submit'}/>
      <MyButton text={'🐢'}/>
    </div>
  );
}

export default Lesson03;
