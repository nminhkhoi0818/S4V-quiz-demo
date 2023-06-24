import React, { useState, useEffect } from 'react'
import "./QuizCard.css"
import { trophyIcon, universeIcon, clockIcon, icon1, icon2, icon3, icon4} from '../../assets'

const QuizCard = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answer, setAnswer] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [answerIndex, setAnswerIndex] = useState(null)
    const [playAgain, setPlayAgain] = useState(false)
    const [result , setResult] = useState({
      score: 0,
      wrongAnswers: 0,
      correctAnswers: 0
    })
    const [quizData, setQuizData] = useState({})
    const alphaQuestion = ['A', 'B', 'C', 'D'];
  
    function shuffleData(array) {
      let currIndex = array.questions.length, randIndex;
      while(currIndex != 0) {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex--;
        [array.questions[currIndex], array.questions[randIndex]] = [array.questions[randIndex], array.questions[currIndex]];
      }
      return array;
    }

    useEffect(() => {
      fetchQuizData();
    }, []);
  
    const fetchQuizData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/quiz');
        const data = await response.json();

        let dataShuffle = shuffleData(data);

        setQuizData(dataShuffle);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

  
    const { questions } = quizData;
    const activeQuestionData = questions && questions.length > activeQuestion ? questions[activeQuestion] : null;
    const { question, choices, correctAnswer } = activeQuestionData || {};
  
    const onClickNext = () => {
      setAnswerIndex(null)
      setResult((prev) => ( answer ? { 
        ...prev,
        score: prev.score + 1,
        correctAnswers: prev.correctAnswers + 1
      } : { ...prev, wrongAnswers: prev.wrongAnswers + 1 } ))
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
      } else {
        setShowResults(true)
        setActiveQuestion(0)
      }
    }
  
    const onClickPlayAgain = () => {
      setPlayAgain(true)
      setShowResults(false)
      setResult({
        score: 0,
        wrongAnswers: 0,
        correctAnswers: 0
      })
    }
  
    const selectedAnswer = (choice, index) => {
      setAnswerIndex(index)
      if (choice === correctAnswer) {
        setAnswer(true)
      } else {
        setAnswer(false)
      }
    }
  
    const addZeroPrefix = (num) => (num < 10 ? `0${num}` : num)

  return (
    <section className="quiz">
        <div className="wrapper">
            <p className="nav-links">Home /  Entertainment / Playing</p>
            <div className="content-container">
            { !showResults && playAgain ? (
                <>
                    <div className="infos">
                      <div className="info">
                          <img src={trophyIcon} alt="" />
                          <p>{result.score} pts</p>
                      </div>

                      <div className="info">
                          <img src={universeIcon} alt="" />
                          <p>{addZeroPrefix(activeQuestion + 1)}/{addZeroPrefix(quizData.totalQuestions)}</p>
                      </div>

                      {/* <div className="info">
                          <img src={clockIcon} alt="" />
                          <p>00:45</p>
                      </div> */}
                  </div>
                    <div className="quiz-card">
                        <h2 className='quiz-question'>{question}</h2>
                        
                        {choices && choices.map((choice, index) => (
                          <React.Fragment key={index}>
                            <div className={`option ${answerIndex === index ? 'selected' : ''}`} key={choice}
                            style={{ backgroundColor: answerIndex === index ? "#825BC2" : "white" }}
                            onClick={() => selectedAnswer(choice, index)}>
                            <div className="option-aphabet">{alphaQuestion[index]}.</div>
                            <div className="option-content">{choice}</div>
                            </div>
                          </React.Fragment>
                        ))}
                    
            
                        <div className='button-flex'>
                        <button className='btn' onClick={onClickNext} disabled={answerIndex === null}>{
                            activeQuestion === quizData.totalQuestions - 1 ? 'Finish' : 'Next'
                        }</button>
                        </div>    
                    </div>    
                    </>
                ) : (
                    <>
                    <div className="result-card">
                        <p>QUIZ COMPLETE</p>
                        <div className="result-score"><p>SCORE:<span> {result.score} pts</span></p></div>
                    </div>
                    <div className='button-nav'>
                        <button className='btn' onClick={onClickPlayAgain}>Play Again</button>
                        {/* <Link to='/'><button>Home</button></Link> */}
                    </div>        
                </>
            )}

                <img src={icon1} alt="" className="icon-1"/>
                <img src={icon2} alt="" className="icon-2"/>
                <img src={icon3} alt="" className="icon-3"/>
                <img src={icon4} alt="" className="icon-4"/>
            </div>
        </div>
    </section>
  )
}

export default QuizCard