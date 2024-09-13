import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson03 from "./lesson_03/Lesson03";
// import Lesson01 from "./lesson_01/Lesson01";
//import Lesson02 from "./lesson_02/Lesson02";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // мы оборачиваем дочерние теги в родитель по просьбе react
  // если нам не нужен явный контейнер мы можем воспользоваться пустым тегом - react фрагментом
  <>
    {/* вызов компонента происходит через обращение к нему в теге */}
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    <Lesson03 />
  </>
);
