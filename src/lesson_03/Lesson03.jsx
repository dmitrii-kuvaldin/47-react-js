import MyButton from '../components/myButton/MyButton';

function Lesson03() {

  const handleClick = () => {
    console.log('click!')
  }

  const handleSubmit = () => {
    console.log('submit!!')
  }

  const handleReset = () => {
    console.log('reset...')
  }


  return (
    <div className='lesson-container'>
      <h2>React props 🔄</h2>
      <span>Способ передачи данных из компонента в компонент от родителя к ребенку</span>
      <p>Мы хотим использовать наш компонент кнопку с разными данными:</p>
      <MyButton text={'нажать'} func={handleClick} />
      <MyButton text={'подтвердить'} func={handleSubmit}/>
      <MyButton text={'обновить'} func={handleReset}/>
    </div>
  );
}

export default Lesson03;
