import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import Basic from "./components/Basic";
import Multi from "./components/Multi";

/*
  날짜 : 2024/05/24
  이름 : 김철학
  내용 : 리액트 Drag and Drop 기능 실습
  
  패키지 설치
   - npm install react-beautiful-dnd
   - npm install sass 

  주의사항 
   - Draggable 기능을 위해 index.js에서 <React.StrictMode> 주석해야 됨
*/
const App = () => {
  return (
    <div className="App">
      <h3>기본</h3>
      <Basic />

      <h3>확장</h3>
      <Multi />
    </div>
  );
};

export default App;
