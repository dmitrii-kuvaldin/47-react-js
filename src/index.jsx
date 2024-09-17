import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson05 from './lessons/lesson_05/Lesson05';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // мы оборачиваем дочерние теги в родитель по просьбе react
  // если нам не нужен явный контейнер мы можем воспользоваться пустым тегом - react фрагментом
  <>
    {/* вызов компонента происходит через обращение к нему в теге */}
    {/* <Lesson01 /> */}
    {/* <Lesson02 /> */}
    {/* <Lesson03 /> */}
    {/* <Homework03 /> */}
    {/* <Lesson04/> */}
    {/* <Homework04 /> */}
    <Lesson05/>
  </>
);
