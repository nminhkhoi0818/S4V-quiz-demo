import { useState } from 'react'
import "./NewCard.css"
import { Link } from 'react-router-dom';

const NewCard = () => {
  const [question, setQuestion] = useState("");
  const [choice, setChoice] = useState("");
  const [choices, setChoices] = useState([]);
  const [type, setType] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const alphaQuestion = ['A', 'B', 'C', 'D'];

  const removeChoice = (index) => {
    const temp = [...choices];
    temp.splice(index, 1);
    setChoices(temp);
    console.log(index);
  }

  const addQuestionButtonPressed = () => {
    let item = {
      question: question,
      choices: choices.map(choice => choice.name),
      type: type,
      correctAns: correctAns,
    };
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    };
    fetch("http://localhost:5000/question", requestOptions)

    setQuestion("");
    setChoice("");
    setChoices([]);
    setType("");
    setCorrectAns("");
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      if(choices.length < 4) {
        setChoices([...choices , {name: choice}]);
        setChoice("");
      }
    }
  }

  return (
    <section className="newCard">
        <div className="after-heading">
            <p className="nav-link">Home / Dashboard / Create new topic</p>
        </div>

        <div className="question-card">
            <h2>Create new question</h2>

            <label for="question-field">Question</label>
            <input id="question-field" type="text" placeholder='Enter a question' value={question}
            onChange={(e) => setQuestion(e.target.value)}></input>

            <label for="choices-field">Choices</label>
            <input
            id="choices-field" 
            type="text" value={choice}
            placeholder="Enter choice"
            onChange={(e) => setChoice(e.target.value)}
            onKeyDown={handleKeyPress}
            ></input>

            <div className="answers">
            {choices.map((choice, index) => (
                <>
                    <div className="answer-heading">
                        <p>Question {alphaQuestion[index]}</p>
                        <a className="btn" onClick={() => {
                            removeChoice(index);
                        }}>Delete this answer</a>
                    </div>
                    <div className="answer-content">
                        {choice.name}
                    </div>
                </>
            ))}
            </div>
            
            <div className="add">
                <a className="btn-add" onClick={() => {
                    if(choices.length < 4) {
                      setChoices([...choices , {name: choice}]);
                      setChoice("");
                    }
                }}>Add a new answer</a>
            </div>

            <label for="type-field">Type</label>
            <input id="type-field" type="text" placeholder='Enter type'
            value={type} onChange={(e) => setType(e.target.value)}></input>

            <label for="correct-field">Correct Answer</label>
            <input id="correct-field" type="text" placeholder='Enter correct answer'
            value={correctAns} onChange={(e) => setCorrectAns(e.target.value)}></input>

            <input type="submit" onClick={addQuestionButtonPressed} className='btn-submit'/>

            <div className="cancel">
                <Link to="/"><a>Cancel and back to the Dashboard</a></Link>
            </div>
    
        </div>
    </section>
  )
}

export default NewCard