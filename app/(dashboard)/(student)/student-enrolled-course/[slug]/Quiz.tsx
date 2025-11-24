"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
interface lessonProp {
  currentLesson: any;
}
interface QuizQuestion {
  _id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}
import { FiCheck, FiX } from "react-icons/fi";
const Quiz: React.FC<lessonProp> = ({ currentLesson }) => {
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const handleQuizAnswer = (questionIndex: any, answer: any) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

const submitQuiz = async() => {
  let score = 0;
  const marksPerQuestion =
    currentLesson?.quiz?.totalMarks / currentLesson?.quiz?.questions?.length;

  const answerArray = currentLesson?.quiz?.questions?.map(
    (question: QuizQuestion, index: number) => {
      const isCorrect = quizAnswers[index] === question?.correctAnswer;
      if (isCorrect) {
        score += marksPerQuestion;
      }

      return {
        quid_id: question?._id,
        studentAnswer: quizAnswers[index] || "",
      };
    }
  );

  const submissionResult = {
    lesson_id: currentLesson?._id,
    answer: answerArray,
  };
// const result = await api_url.post(`/v1/user/submit/quiz/${currentLesson?._id}`, submissionResult)
// console.log(result)

setQuizScore(Math.round(score * 10) / 10);
setQuizSubmitted(true);
return submissionResult;
};

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Lesson Quiz</h3>
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">
          <span className="font-semibold">Note:</span> This quiz has{" "}
          {currentLesson?.quiz?.questions?.length} questions. You need{" "}
          {currentLesson?.quiz?.passingMarks} out of{" "}
          {currentLesson?.quiz?.totalMarks} to pass.
        </p>
      </div>

      {currentLesson?.quiz?.questions?.map(
        (question: QuizQuestion, qIndex: number) => (
          <div
            key={qIndex}
            className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <p className="font-medium text-gray-700 mb-3">
              {qIndex + 1}. {question?.question}
            </p>
            <div className="space-y-3">
              {question?.options.map((option: string, oIndex: number) => (
                <div
                  key={oIndex}
                  className={`p-3 border rounded-md cursor-pointer transition flex items-center
                          ${
                            !quizSubmitted && quizAnswers[qIndex] === option
                              ? "border-primary bg-blue-50"
                              : "border-gray-200"
                          }
                          ${
                            quizSubmitted && option === question?.correctAnswer
                              ? "bg-green-50 border-green-500"
                              : ""
                          }
                          ${
                            quizSubmitted &&
                            quizAnswers[qIndex] === option &&
                            option !== question?.correctAnswer
                              ? "bg-red-50 border-red-500"
                              : ""
                          }
                        `}
                  onClick={() =>
                    !quizSubmitted && handleQuizAnswer(qIndex, option)
                  }
                >
                  <div
                    className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mr-3
                          ${
                            !quizSubmitted && quizAnswers[qIndex] === option
                              ? "border-primary bg-primary text-white"
                              : "border-gray-300"
                          }
                          ${
                            quizSubmitted && option === question?.correctAnswer
                              ? "border-green-500 bg-green-500 text-white"
                              : ""
                          }
                          ${
                            quizSubmitted &&
                            quizAnswers[qIndex] === option &&
                            option !== question?.correctAnswer
                              ? "border-red-500 bg-red-500 text-white"
                              : ""
                          }
                        `}
                  >
                    {quizSubmitted ? (
                      option === question?.correctAnswer ? (
                        <FiCheck size={14} />
                      ) : quizAnswers[qIndex] === option ? (
                        <FiX size={14} />
                      ) : null
                    ) : quizAnswers[qIndex] === option ? (
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    ) : null}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        )
      )}

      {!quizSubmitted ? (
        <div className="sticky bottom-0 bg-white py-4 border-t border-gray-200">
          <button
            onClick={submitQuiz}
            disabled={
              Object.keys(quizAnswers)?.length <
              currentLesson?.quiz?.questions?.length
            }
            className={`w-full px-6 py-3 rounded-md transition
                      ${
                        Object.keys(quizAnswers)?.length ===
                        currentLesson?.quiz?.questions?.length
                          ? "bg-primary text-white hover:bg-primary"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }
                    `}
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-primary mb-4">
              <span className="text-2xl font-bold">
                {quizScore}/{currentLesson?.quiz?.totalMarks}
              </span>
            </div>
            <h4
              className={`text-xl font-bold mb-2 ${
                quizScore >= currentLesson?.quiz?.passingMarks
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {quizScore >= currentLesson?.quiz?.passingMarks
                ? "Quiz Passed!"
                : "Quiz Failed"}
            </h4>
            <p className="text-gray-600">
              {quizScore >= currentLesson?.quiz?.passingMarks
                ? "Congratulations! You have successfully completed this lesson."
                : `You needed ${currentLesson?.quiz?.passingMarks} marks to pass. Try again!`}
            </p>
          </div>

          {quizScore < currentLesson?.quiz?.passingMarks && (
            <button
              onClick={() => {
                setQuizSubmitted(false);
                setQuizAnswers({});
              }}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
            >
              Retake Quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
