import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import trueOrFalseQuestions from '../../data/trueOrFalseQuestions.json';
import { translations } from '../../translations/translations';
import './TrueFalseGame.css';

const TrueFalseGame: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const shuffledQuestions = [...trueOrFalseQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
  };

  const getStatement = (question: any) => {
    return language === 'sv' ? question.statement_sv : question.statement_en;
  };

  const handleAnswer = (answer: boolean) => {
    if (questions[currentQuestion].answer === answer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="true-false-game">
      {!gameOver ? (
        <div className="game-content">
          <button
            onClick={() => handleAnswer(true)}
            className="true-button casino-button"
          >
            {t.true}
          </button>
          <div className="question-container">
            <h2 className="question">{getStatement(questions[currentQuestion])}</h2>
          </div>
          <button
            onClick={() => handleAnswer(false)}
            className="false-button casino-button"
          >
             {t.false}
          </button>
        </div>
      ) : (
        <div className="game-over-container">
          <h2>{translations[language].gameOverMessage}</h2>
          <div className="final-score">
            {`${translations[language].finalScore} ${score}/${questions.length}`}
          </div>
          <button
            onClick={startGame}
            className="play-again-button"
          >
            {translations[language].playAgain}
          </button>
        </div>
      )}
    </div>
  );
};

export default TrueFalseGame;
