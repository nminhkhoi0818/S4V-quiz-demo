import React from 'react'
import "./QuizCard.css"
import { trophyIcon, universeIcon, clockIcon, icon1, icon2, icon3, icon4} from '../../assets'

const QuizCard = () => {
  return (
    <section className="quiz">
        <div className="wrapper">
            <p className="nav-links">Home /  Entertainment / Playing</p>
            <div className="content-container">
                <div className="infos">
                    <div className="info">
                        <img src={trophyIcon} alt="" />
                        <p>26 pts</p>
                    </div>

                    <div className="info">
                        <img src={universeIcon} alt="" />
                        <p>2/10</p>
                    </div>

                    <div className="info">
                        <img src={clockIcon} alt="" />
                        <p>00:45</p>
                    </div>
                </div>

                <div className="quiz-card">
                    <p className="quiz-question">Who wrote the words to the song “My Way”?</p>

                    <div className="option">
                        <div className="option-aphabet">A.</div>
                        <div className="option-content">Đen Vâu</div>
                    </div>

                    <div className="option">
                        <div className="option-aphabet">B.</div>
                        <div className="option-content">Paul Anka</div>
                    </div>

                    <div className="option">
                        <div className="option-aphabet">C.</div>
                        <div className="option-content">Frank Sinatra</div>
                    </div>

                    <div className="option">
                        <div className="option-aphabet">D.</div>
                        <div className="option-content">Vũ</div>
                    </div>
                </div>

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