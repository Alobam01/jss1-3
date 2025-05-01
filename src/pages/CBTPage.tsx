import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cbtData } from '../data/cbtData';
import { CBTSection } from '../types';

const CBTPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<CBTSection | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const section = cbtData.find(s => s.id === sectionId);
    if (section) {
      setCurrentSection(section);
      setTimeLeft(section.timeLimit * 60); // Convert minutes to seconds
    } else {
      navigate('/');
    }
  }, [sectionId, navigate]);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmit();
    }
  }, [timeLeft, showResults]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null && currentSection) {
      const currentQuestion = currentSection.questions[currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      
      setAnsweredQuestions(prev => ({
        ...prev,
        [currentQuestion.id]: selectedAnswer
      }));

      if (isCorrect) {
        setScore(prev => prev + 1);
      }

      if (currentQuestionIndex < currentSection.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!currentSection) {
    return <div>Loading...</div>;
  }

  if (showResults) {
    const percentage = (score / currentSection.questions.length) * 100;
    const passed = percentage >= currentSection.passingScore;

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Test Results</h1>
          <div className="mb-6">
            <p className="text-lg">Your score: {score} out of {currentSection.questions.length}</p>
            <p className="text-lg">Percentage: {percentage.toFixed(1)}%</p>
            <p className={`text-lg font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? 'Congratulations! You passed!' : 'Sorry, you did not pass.'}
            </p>
          </div>
          <div className="space-y-4">
            {currentSection.questions.map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4">
                <p className="font-semibold mb-2">Question {index + 1}: {question.question}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Your answer: {question.options[answeredQuestions[question.id] ?? -1] || 'Not answered'}
                </p>
                <p className="text-sm text-gray-600">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Explanation: {question.explanation}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = currentSection.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{currentSection.title}</h1>
          <div className="text-lg font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold mb-4">
            Question {currentQuestionIndex + 1} of {currentSection.questions.length}
          </p>
          <p className="text-lg mb-4">{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg cursor-pointer ${
                  selectedAnswer === index ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`px-4 py-2 rounded ${
            selectedAnswer === null
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {currentQuestionIndex === currentSection.questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CBTPage; 