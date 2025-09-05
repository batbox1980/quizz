
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import type { Question } from './types';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizState, setQuizState] = useState<'start' | 'playing' | 'finished'>('start');

  const currentQuestion: Question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswerIndex(index);
    }
  };

  const checkAnswer = useCallback(() => {
    if (selectedAnswerIndex === null) return;

    setIsAnswered(true);
    if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  }, [selectedAnswerIndex, currentQuestion]);

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswerIndex(null);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizState('finished');
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setQuizState('playing');
  };
  
  const startQuiz = () => {
    setQuizState('playing');
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return selectedAnswerIndex === index
        ? 'bg-blue-600 text-white ring-2 ring-blue-300'
        : 'bg-white hover:bg-gray-100 text-gray-800';
    } else {
      if (index === currentQuestion.correctAnswerIndex) {
        return 'bg-green-500 text-white'; // Correct answer
      }
      if (index === selectedAnswerIndex) {
        return 'bg-red-500 text-white'; // Incorrectly selected answer
      }
      return 'bg-white text-gray-800 opacity-60'; // Other options
    }
  };
  
  const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      ></div>
    </div>
  );

  const renderStartScreen = () => (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue au Quiz Pastoral !</h1>
      <p className="text-lg text-gray-600 mb-8">Teste tes connaissances sur la foi chrétienne. Prêt à relever le défi ?</p>
      <button
        onClick={startQuiz}
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
      >
        Commencer le Quiz
      </button>
    </div>
  );

  const renderQuizScreen = () => (
    <>
      <ProgressBar current={currentQuestionIndex} total={QUIZ_QUESTIONS.length} />
      <div className="mb-6">
        <p className="text-gray-600 text-sm font-semibold">Question {currentQuestionIndex + 1} sur {QUIZ_QUESTIONS.length}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">{currentQuestion.questionText}</h2>
      </div>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg shadow-sm transition-all duration-300 font-semibold text-lg ${getButtonClass(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && (
          <div className="mt-6 p-4 rounded-lg bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800">
            <h3 className="font-bold">Explication :</h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      <div className="mt-8 text-center">
        {!isAnswered ? (
          <button
            onClick={checkAnswer}
            disabled={selectedAnswerIndex === null}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Question Suivante' : 'Voir les Résultats'}
          </button>
        )}
      </div>
    </>
  );

  const renderFinishedScreen = () => (
     <div className="text-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Terminé !</h2>
      <p className="text-2xl text-gray-600 mb-6">
        Ton score final est de :
      </p>
      <p className="text-6xl font-extrabold text-blue-600 mb-8">
        {score} / {QUIZ_QUESTIONS.length}
      </p>
      <button
        onClick={restartQuiz}
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
      >
        Recommencer
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-10 transform transition-all duration-500">
        {quizState === 'start' && renderStartScreen()}
        {quizState === 'playing' && renderQuizScreen()}
        {quizState === 'finished' && renderFinishedScreen()}
      </div>
    </div>
  );
};

export default App;
