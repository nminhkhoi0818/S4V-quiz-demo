import { useState } from 'react'
import "./NewCard.css"

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

  return (
    <section className="newCard">
        <div className="pre-heading">
            <p className="nav-link">Home / Topic management / Create new topic</p>
        </div>

        <div className="question-card">
            <h2>Create new question</h2>
            <form action="#">
                <label for="question-field">Question</label>
                <input id="question-field" type="text" placeholder='Enter a question'></input>

                <label for="choices-field">Choices</label>
                <input
                id="choices-field" 
                type="text" value={choice}
                placeholder="Enter choice"
                onChange={(e) => setChoice(e.target.value)}
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
                        setChoices([...choices , {name: choice}])
                    }}>Add a new answer</a>
                </div>

                <label for="type-field">Type</label>
                <input id="type-field" type="text" placeholder='Enter type'></input>

                <label for="correct-field">Correct Answer</label>
                <input id="correct-field" type="text" placeholder='Enter correct answer'></input>

                <input type="submit"/>

                <div className="cancel">
                    <a href="#">Cancel and back to the Topic management</a>
                </div>
            </form>

        </div>
    </section>
  )
}

export default NewCard