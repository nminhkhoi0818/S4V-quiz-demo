import React, { useState, useEffect } from "react";
import "./QuestionList.css"
import { Link } from 'react-router-dom'

const QuestionList = () => {
   const [data, setData] = useState({ items: [] });

    useEffect(() => {
      fetch("http://localhost:5000/question", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setData({ items: data });
          console.log(data);
        });
    }, []);
  
  
    const deleteItem = (question) => {
      const items = data["items"];
      const requestOptions = {
        method: "DELETE",
      };
      fetch(`http://localhost:5000/question/${question.id}`, requestOptions).then(
        (response) => {
          if (response.ok) {
            const idx = items.indexOf(question);
            items.splice(idx, 1);
            setData({ items: items });
          }
        }
      );
    };

  return (
    <section className="questionList">
        <div className="pre-heading">
            <p className="nav-link">Home / Dashboard</p>
            <div className="btn-new">
                <Link to='/new'><a>Create new question</a></Link>
            </div>
        </div>
        <div className="wrapper">
            <div className="content-container">
                <div className="question-heading">
                    <p>Question name</p>
                    <p>Actions</p>
                </div>      

                <div>
                    {data["items"].map((question) => (
                        <React.Fragment key={question.id}>
                        <div className="question-bar">
                            <div className="question-content">
                            {question.id}. {question.question}
                            </div>
                            <div className="question-actions">
                            <a onClick={() => deleteItem(question)}>Delete</a>
                            </div>
                        </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default QuestionList