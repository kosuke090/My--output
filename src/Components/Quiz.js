import React, { useState } from 'react';
import QuizHead from "./QuizComponents/QuizHead";
import QuizList from "./QuizComponents/QuizList";
import QuizButton from "./QuizComponents/QuizButton";
import QuizFinish from "./QuizComponents/QuizFinish";

export default function About() {
  const [curenNum, setCurenNum] = useState(0);
  const [check, setCheck] = useState(false);
  const [finish, setFinish] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [quizs, setquizs] = useState([
    {
      q: "趣味", c: ["漫画・本", "釣り", "ゲーム"], ans: 0,
    },
    {
      q: "嫌いな食べ物", c: ["トマト", "しそ", "マヨネーズ"], ans: 1,
    },
    {
      q: "好きな果物", c: ["りんご", "オレンジ", "ブルーベリー"], ans: 2,
    },
    {
      q: "好きな色", c: ["青", "灰色", "黒"], ans: 1,
    },
   
  ]);

  

  const doNext = () => {
      if (!check) {
        return
      }
      setCheck(false)
      if (curenNum === quizs.length - 1) {
          setFinish(true)
        return
      }
      setCurenNum(curenNum + 1);
      const newQuizs = [...quizs]
      setquizs(newQuizs)
      setCheck(false)
      const quizlist = document.querySelector(".quizlist");
 
      for (const [index,] of quizs[curenNum].c.entries()) {
        quizlist.children[index].classList.remove('wrong');
        quizlist.children[index].classList.remove('correct');
      }
  }

  const doCheckAnswer = (index) => {
      if (check) {
        return
      }
      const answer = quizs[curenNum].ans;
      const quizlist = document.querySelector(".quizlist");
   
      for (const [index,] of quizs[curenNum].c.entries()) {
        quizlist.children[index].classList.add("wrong");
      }

      quizlist.children[answer].classList.add("correct");
      if(index ===quizs[curenNum].ans){
        setCorrect(correct + 1)
      }
      setCheck(true);


  }



  return (

    <div className="container">
      <QuizHead quizs={quizs} curenNum={curenNum} />
      <QuizList quizs={quizs} curenNum={curenNum} doCheckAnswer={doCheckAnswer} />
      <QuizButton curenNum={curenNum} doNext={doNext} quizs={quizs} />
      {finish?<QuizFinish correct={correct} length={quizs.length}/>: ""}
    </div>
  )
}
