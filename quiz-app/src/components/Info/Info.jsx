import React from 'react'
import "./Info.css"

const Info = () => {
  return (
    <section className='dashboard'>
        <div className="wrapper-3">
            <h1>Trivia Challenge</h1>
            <div className='infos-dashboard'>
                <div className='info-dashboard'>
                    <h3>About Trivia Challenge</h3>
                    <p>Trivia Challenge là ứng dụng giải đố trả lời câu hỏi ở nhiều lĩnh vực khác nhau.</p>
                    <p>Ngoài ra ứng dụng còn hỗ trợ AI chatbot để tương tác, trả lời câu hỏi của người dùng.</p>
                </div>
                <div className="info-dashboard">
                    <h3>How To Use?</h3>
                    <p>Nhấn vào phần Quiz để chơi Quiz Game. Ứng dụng có hỗ trợ thêm, xóa câu hỏi.</p>
                    <p>Nhấn vào phần Chatbot để tương tác với AI chatbot.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info