
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const XCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 ml-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);


const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (questionIndex: number, answer: string) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }

  return (
    <div className="space-y-8">
      {questions.map((q, index) => (
        <div key={index} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            {index + 1}. {q.question.split('______')[0]}
            <span className="font-bold text-sky-600 dark:text-sky-400 underline decoration-dotted decoration-2 underline-offset-4 mx-2">
                {isSubmitted ? (selectedAnswers[index] || '______') : '______'}
            </span>
            {q.question.split('______')[1]}
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.options.map((option) => {
              const isSelected = selectedAnswers[index] === option;
              let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-colors duration-200 ";
              if (isSubmitted) {
                const isCorrect = option === q.correctAnswer;
                if (isCorrect) {
                    buttonClass += 'bg-green-100 dark:bg-green-900/50 border-green-500 text-green-800 dark:text-green-300';
                } else if (isSelected && !isCorrect) {
                    buttonClass += 'bg-red-100 dark:bg-red-900/50 border-red-500 text-red-800 dark:text-red-300';
                } else {
                    buttonClass += 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400';
                }
              } else {
                if(isSelected) {
                    buttonClass += 'bg-sky-100 dark:bg-sky-900/50 border-sky-500';
                } else {
                    buttonClass += 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-sky-400 dark:hover:border-sky-500';
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(index, option)}
                  disabled={isSubmitted}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {isSubmitted && (
            <div className="mt-3 flex items-center text-sm">
                {selectedAnswers[index] === q.correctAnswer ? (
                    <>
                    <CheckCircleIcon />
                    <span className="ml-1 text-green-700 dark:text-green-400">Chính xác!</span>
                    </>
                ) : (
                    <>
                    <XCircleIcon />
                     <span className="ml-1 text-red-700 dark:text-red-400">
                        Không đúng. Đáp án đúng là: <strong className="font-semibold">{q.correctAnswer}</strong>
                    </span>
                    </>
                )}
            </div>
          )}
        </div>
      ))}

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {isSubmitted ? (
             <>
                <div className="text-lg font-bold bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 px-4 py-2 rounded-lg">
                    Kết quả của bạn: {score} / {questions.length}
                </div>
                <button
                    onClick={handleReset}
                    className="w-full sm:w-auto bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                    Làm lại
                </button>
            </>
        ) : (
            <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== questions.length}
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-600"
            >
                Kiểm tra đáp án
            </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
