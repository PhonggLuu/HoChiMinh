import React, { useState } from "react";
import "./form-quizz.css";
import "./group-answer.css";
import "./button.css";

const QA = () => {
  const questions = [
    {
      question: "Bác Hồ rời Bến Nhà Rồng vào năm nào?",
      options: [
        "1911",
        "1912",
        "1910",
        "1913",
      ],
      correctAnswer: "1911",
    },
    {
      question: "Bác Hồ đã từng làm việc tại thành phố nào của Anh?",
      options: ["London", "Manchester", "Liverpool", "Birmingham"],
      correctAnswer: "London",
    },
    {
      question: "Tại Pháp, Bác Hồ đã tham gia tổ chức nào?",
      options: [
        "Đảng Cộng sản Pháp",
        "Đảng Xã hội Pháp",
        "Hội Nhân quyền",
        "Hội Sinh viên",
      ],
      correctAnswer: "Đảng Xã hội Pháp",
    },
    {
      question: "Ai là người có ảnh hưởng lớn đến tư tưởng cách mạng của Bác Hồ thông qua tác phẩm 'Luận cương về vấn đề dân tộc và thuộc địa'?",
      options: [
        "Karl Marx",
        "V.I. Lenin",
        "Phan Bội Châu",
        "Jean Jaurès",
      ],
      correctAnswer: "V.I. Lenin",
    },
    {
      question: "Bác Hồ đã thành lập tổ chức nào trong thời gian hoạt động ở Pháp?",
      options: [
        "Hội Liên hiệp Thuộc địa",
        "Hội Việt Nam Cách mạng Thanh niên",
        "Đông Dương Cộng sản Đảng",
        "Việt Nam Quốc dân Đảng",
      ],
      correctAnswer: "Hội Liên hiệp Thuộc địa",
    },
    {
      question: "Hang Pác Bó có ý nghĩa gì trong sự nghiệp cách mạng của Bác Hồ?",
      options: [
        "Nơi sinh ra",
        "Căn cứ cách mạng khi về nước",
        "Nơi viết tuyên ngôn độc lập",
        "Nơi thành lập Đảng",
      ],
      correctAnswer: "Căn cứ cách mạng khi về nước",
    },
    {
      question: "Tống Khánh Linh có vai trò gì trong hành trình cách mạng của Bác Hồ?",
      options: [
        "Người thầy",
        "Đồng chí cách mạng Việt Nam",
        "Cầu nối với phong trào cách mạng châu Á",
        "Nhà báo ủng hộ",
      ],
      correctAnswer: "Cầu nối với phong trào cách mạng châu Á",
    },
    {
      question: "Đâu là một trong những di sản quan trọng nhất của tư tưởng Hồ Chí Minh?",
      options: [
        "Chủ nghĩa tư bản",
        "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        "Chủ nghĩa dân tộc cực đoan",
        "Chính sách bế quan tỏa cảng",
      ],
      correctAnswer: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setAnswerStatus(true);
    } else {
      setAnswerStatus(false);
    }
    setIsAnswered(true);

    // Move to the next question after 5 seconds
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption("");
        setIsAnswered(false);
      } else {
        setIsQuizFinished(true);
      }
    }, 5000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (isQuizFinished) {
    return (
      <div id="quiz" className="section-container">
        <h1 className="section-title">Quizz</h1>
        <div className="quiz-section">
          <p>Bạn đã trả lời hết tất cả câu hỏi!</p>
        </div>
      </div>
    );
  }

  return (
    <div id="quiz" className="section-container">
        <h1 className="section-title">Quizz</h1>
        <div className="quiz-section">
            <div className="quiz-question">
                <h2>{currentQuestion.question}</h2>
                {currentQuestion.options.map((option, index) => {
                    let optionClass = "";

                    if (isAnswered) {
                    // Add class for correct or incorrect options
                    if (selectedOption === option) {
                        optionClass = answerStatus ? "correct" : "incorrect";
                    } else if (option === currentQuestion.correctAnswer) {
                        optionClass = "correct"; // Highlight correct answer
                    }
                    }

                    return (
                    <label
                        key={index}
                        style={{ display: "block", margin: "8px 0" }}
                        className={`custom-radio-container options ${optionClass}`}
                    >
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionSelect(option)}
                            disabled={isAnswered} // Disable selection after answering
                            className="option"
                        />
                        <span className="custom-radio-checkmark"></span>
                        <span className="custom-radio-text">{option}</span>
                    </label>
                    );
                })}
                <button
                  className="button"
                  onClick={handleSubmitAnswer}
                  style={{ display: !selectedOption || isAnswered ? "none" : "" }}
                >
                  <span className="text">Trả lời</span>
                  <span className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="20"
                      viewBox="0 0 38 15"
                      fill="none"
                    >
                      <path
                        fill="white"
                        d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                      ></path>
                    </svg>
                  </span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default QA;
