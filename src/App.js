import "./App.css";
import React from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["Самолет", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Кто лучший Преподаватель ?",
    variants: [" Екатерина :)", "Половинкина Екатерина", "Половинкина Екатерина Анатольевна :)"],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",],
    correct: 2,
  },
  {
    title: "Сколько книг можно положить в пустой рюкзак?",
    variants: [
      "Одну",
      "Две",
      "Три",],
    correct: 0,
  },
  {
    title: "Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?",
    variants: [
      "365",
      "512",
      "254",],
    correct: 0,
  },
  {
    title: "Что делает с ушами чрезвычайно доверчивый человек?",
    variants: [
      "развешивает",
      "раскладывает",
      "разматывает",],
    correct: 0,
  },
  {
    title: "Какие камни находятся в озере, а какие в море?",
    variants: [
      "мокрые",
      "скользкие",
      "острые",],
    correct: 6,
  },
  {
    title: "Какой столб невозможно поставить на землю?",
    variants: [
      "позвоночный",
      "длинный",
      "крашенный",],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/9/93/OML_PAPYRUS.gif/revision/latest?cb=20160110051925" alt="" />
      <h2> Правильных {correct} ответов из {questions.length}</h2>
      <a href ="/">
        <button>Попробовать снова</button>
      </a>  

    </div>
  );
}

function Game({step, question, onClickVariant}) {

  const percent = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div> 
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((el,index) => {
            return(
              <li onClick={() => onClickVariant(index)} key={index}>
                {el}
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question =  questions[step];


  const onClickVariant = (index) => {
    setStep(step +1);
    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }



  return (
    <div className="App">
      {
        step !==questions.length ?     
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>) :
        (<Result correct={correct}/> )
      }  
    </div>
  );
}

export default App;
