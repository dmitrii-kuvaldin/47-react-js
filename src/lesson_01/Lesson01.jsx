// импорт css из отдельного файла
import './lesson01.css';
import jsxImg from '../assets/jsx.jpg'

// функции App является react компонентом
// в return такая функция возвращает верстку с данными
// react компоненты называются с большой буквы
function Lesson01() {
  return (
    // такой синтаксис: верстка в логике JS называется JSX
    <div className="App">
      <h1>Hello, react! 🙋‍♂️</h1>
      <img className='jsxImg' src={jsxImg} alt="" />
    </div>
  );
}

// чтобы использовать компонент в другом файле мы используем экспорт

export default Lesson01;
