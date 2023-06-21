import React from 'react'
import "./QuestionList.css"

const QuestionList = () => {
  return (
    <section className="questionList">
        <div className="pre-heading">
            <p className="nav-link">Home / Topic management</p>
            <div className="btn-new">
                <a href="#">Create new topic</a>
            </div>
        </div>
        <div className="wrapper">
            <div className="content-container">
                <div className="question-heading">
                    <p>Topic name</p>
                    <p>Actions</p>
                </div>

                <div className="question-bar">
                    <div className="question-content">1. Geography</div>
                    <div className="question-actions">
                        <a href="#">Edit  |  Delete</a>
                    </div>
                </div>

                <div className="question-bar">
                    <div className="question-content">2. Topic 2</div>
                    <div className="question-actions">
                        <a href="#">Edit  |  Delete</a>
                    </div>
                </div>

                <div className="question-bar">
                    <div className="question-content">3. Music</div>
                    <div className="question-actions">
                        <a href="#">Edit  |  Delete</a>
                    </div>
                </div>

                <div className="question-bar">
                    <div className="question-content">4. Topic 4</div>
                    <div className="question-actions">
                        <a href="#">Edit  |  Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuestionList