import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import { Button, Center } from '@chakra-ui/react';

const questionsData = [
  {
    qno: 1,
    question: 'How do you handle challenges?',
    options: ['Analytical', 'Creative', 'Team-oriented'],
  },
  {
    qno: 2,
    question: 'What type of tasks do you enjoy the most?',
    options: ['Problem Solving', 'Communication', 'Leadership'],
  },
  {
    qno: 3,
    question: 'How do you approach learning new skills?',
    options: ['Self-paced', 'Collaborative', 'Guided instruction'],
  },
  {
    qno: 4,
    question: 'What motivates you in a team setting?',
    options: ['Achieving goals', 'Cooperation','Innovation'],
  },
  {
    qno: 5,
    question: 'When faced with a problem, do you prefer:',
    options: ['Logical analysis', 'Intuitive solutions', 'Collaborative problem-solving'],
  },
  {
    qno: 6,
    question: 'How do you handle stress?',
    options: ['Stay calm and focused', 'Delegate tasks', 'Seek support from others'],
  },
  {
    qno: 7,
    question: 'What environment do you thrive in?',
    options: ['Fast-paced', 'Structured and organized', 'Flexible and dynamic'],
  },
  {
    qno: 8,
    question: 'Which statement describes you best?',
    options: ['Detail-oriented', 'Big-picture thinker', 'Balanced between details and big-picture'],
  },
  {
    qno: 9,
    question: 'How do you handle feedback?',
    options: ['Open to feedback and improvement', 'Analyze feedback critically', 'Motivated by constructive feedback'],
  },
  {
    qno: 10,
    question: 'How do you contribute to a team project?',
    options: ['Take a leadership role', 'Collaborate with team members', 'Provide specialized skills'],
  },
  {
    qno: 11,
    question: 'How do you handle tight deadlines?',
    options: ['Prioritize tasks efficiently', 'Delegate tasks strategically', 'Work well under pressure'],
  },
  {
    qno: 12,
    question: 'When working in a team, how do you handle disagreements?',
    options: ['Mediate and find common ground', 'Listen actively to different perspectives', 'Escalate the issue to higher authorities'],
  },
  {
    qno: 13,
    question: 'How do you adapt to changes in the workplace?',
    options: ['Adapt quickly and stay flexible', 'Analyze the changes before adapting', 'Resist changes that disrupt routine'],
  },
  {
    qno: 14,
    question: 'How do you handle feedback from peers?',
    options: ['Embrace constructive criticism', 'Become defensive initially', 'Ignore feedback that doesn\'t align with your views'],
  },
  {
    qno: 15,
    question: 'How do you approach public speaking and presentations?',
    options: ['Confident and enjoy public speaking', 'Comfortable but looking to improve', 'Avoid public speaking when possible'],
  },
  {
    qno: 16,
    question: 'How do you express yourself artistically?',
    options: ['Visual arts such as painting or photography', 'Performing arts like music or theater', 'Literary arts and writing'],
  },
  {
    qno: 17,
    question: 'What motivates you in the design and creation of new products?',
    options: ['Efficiency and functionality','Innovation and cutting-edge design', 'Enhancing user experience'],
  },
  {
    qno: 18,
    question: 'What role do ethics and integrity play in your decision-making?',
    options: ['Integral to decision-making', 'Considered but not the primary factor', 'Minimal consideration'],
  },
  {
    qno: 19,
    question: 'In a leadership position, how do you motivate your team?',
    options: ['Inspire with a vision', 'Provide tangible rewards', 'Encourage collaborative success'],
  },
  {
    qno: 20,
    question: 'How do you approach networking for career advancement?',
    options: ['Proactively build a professional network', 'Occasionally network as needed', 'Reserved, limited networking'],
  },
  {
    qno: 21,
    question: 'What aspect of a business interests you the most?',
    options: ['Strategic planning and business development', 'Operational efficiency and management', 'Marketing and customer relations'],
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  let scores = [ 0, 0, 0, 0, 0, 0, 0, 0];

  const handleAnswer = (selectedOption, question, qno) => {
    
    if(qno === 1){
      if(selectedOption ==='Analytical') { scores[0] += 10; scores[8]+=5; }
      if(selectedOption === 'Creative' ) { scores[6]+=10; }
      if(selectedOption === 'Team-oriented' ) { scores[1]+=3; scores[3]+=5; }
    }

    if(qno === 2){
      if(selectedOption === 'Problem Solving') { scores[0]+=5; scores[6]+=5; }
      if(selectedOption === 'Communication' ) { scores[2]+=10; }
      if(selectedOption === 'Leadership' ) { scores[2]+=5; scores[6]+=5; }
    }

    if(qno === 3){
      if(selectedOption === 'Self-paced') { scores[6]+=10; }
      if(selectedOption === 'Collaborative' ) { scores[2]+=10; scores[7]+=5; }
      if(selectedOption === 'Guided instruction' ) { scores[1]+=3; }
    }

    if(qno === 4){
      if(selectedOption === 'Achieving goals') { scores[0]+=7;  }
      if(selectedOption === 'Cooperation' ) { scores[2]+=10; scores[7]+=7; }
      if(selectedOption === 'Innovation' ) { scores[5]+= 10; }
    }

    if(qno === 5){
      if(selectedOption === 'Logical analysis') { scores[0]+=10; scores[1]+=10; }
      if(selectedOption === 'Intuitive solutions' ) { scores[5]+=10; }
      if(selectedOption === 'Collaborative problem-solving' ) { scores[2]+=10; }
    }

    if(qno === 6){
      if(selectedOption === 'Stay calm and focused') { scores[0]+=10; scores[3]+=10; }
      if(selectedOption === 'Delegate tasks' ) { scores[1]+=5; }
      if(selectedOption === 'Seek support from others' ) { scores[7]+=10; }
    }

    if(qno === 7){
      if(selectedOption === 'Fast-paced') { scores[3]+=10; }
      if(selectedOption === 'Structured and organized' ) { scores[6]+=10; }
      if(selectedOption === 'Flexible and dynamic' ) { scores[3]+=10; }
    }

    if(qno === 8){
      if(selectedOption === 'Detail-oriented') { scores[0]+=10; scores[1]+=10; }
      if(selectedOption === 'Big-picture thinker' ) { scores[5]+=10; }
      if(selectedOption === 'Balanced between details and big-picture' ) { scores[0]+=7; scores[1]+=7; scores[5]+=10; }
    }

    if(qno === 9){
      if(selectedOption === 'Open to feedback and improvement') { scores[3]+=7; }
      if(selectedOption === 'Analyze feedback critically' ) { scores[0]+=10; }
      if(selectedOption === 'Motivated by constructive feedback' ) { scores[3]+=10; scores[5]+=7; }
    }

    if(qno === 10){
      if(selectedOption === 'Take a leadership role') { scores[5]+=5; scores[6]+=5; }
      if(selectedOption === 'Collaborate with team members' ) { scores[2]+=10; }
      if(selectedOption === 'Provide specialized skills' ) { scores[3]+=7; }
    }

    if(qno === 11){
      if(selectedOption === 'Prioritize tasks efficiently') { scores[0] += 5; scores[6]+=5 }
      if(selectedOption === 'Delegate tasks strategically' ) { scores[0]+=10; }
      if(selectedOption === 'Work well under pressure' ) { scores[6]+=10; scores[3]+=10; }
    }

    if(qno === 12){
      if(selectedOption === 'Mediate and find common ground') { scores[0]+=10; }
      if(selectedOption === 'Listen actively to different perspectives' ) { scores[1]+=10; }
      if(selectedOption === 'Escalate the issue to higher authorities' ) { scores[4]+=5; }
    }

    if(qno === 13){
      if(selectedOption === 'Adapt quickly and stay flexible') { scores[3]+=10; }
      if(selectedOption === 'Analyze the changes before adapting' ) { scores[0]+=10; }
      if(selectedOption === 'Resist changes that disrupt routine' ) { scores[6]+=10; }
    }

    if(qno === 14){
      if(selectedOption === 'Embrace constructive criticism') { scores[5]+=10; }
      if(selectedOption === 'Become defensive initially' ) { scores[3]+=10; }
      if(selectedOption === 'Ignore feedback that doesn\'t align with your views' ) { scores[4]+=10; }
    }

    if(qno === 15){
      if(selectedOption === 'Confident and enjoy public speaking') { scores[32]+=10; }
      if(selectedOption === 'Comfortable but looking to improve' ) { scores[3]+=7; }
      if(selectedOption === 'Avoid public speaking when possible' ) { scores[3]+=50; }
    }

    if(qno === 16){
      if(selectedOption === 'Visual arts such as painting or photography') { scores[4]+=10; }
      if(selectedOption === 'Performing arts like music or theater' ) { scores[4]+=10; scores[7]+=10; }
      if(selectedOption === 'Literary arts and writing' ) { scores[2]+=10; scores[6]+=10; }
    }

    if(qno === 17){
      if(selectedOption === 'Efficiency and functionality') { scores[0]+=25; scores[1]+=7;}
      if(selectedOption === 'Innovation and cutting-edge design' ) { scores[5]+=30; scores[1]+=7; }
      if(selectedOption === 'Enhancing user experience' ) { scores[2]+=5; scores[7]+=15; }
    }

    if(qno === 18){
      if(selectedOption === 'Integral to decision-making') { scores[7]+=10; }
      if(selectedOption === 'Considered but not the primary factor' ) { scores[0]+=5; scores[1]+=5; scores[5]+=5; }
      if(selectedOption === 'Minimal consideration' ) {  }
    }

    if(qno === 19){
      if(selectedOption === 'Inspire with a vision') { scores[5]+=10; scores[4]+=5; }
      if(selectedOption === 'Provide tangible rewards' ) { scores[2]+=10; scores[7]+=7; }
      if(selectedOption === 'Encourage collaborative success' ) { scores[2]+=20; scores[7]+=10; }
    }

    if(qno === 20){
      if(selectedOption === 'Proactively build a professional network') { scores[2]+=20; scores[4]+=0; }
      if(selectedOption === 'Occasionally network as needed' ) { scores[2]+=15; scores[4]+=15; }
      if(selectedOption === 'Reserved, limited networking' ) { scores[4]+=25; }
    }


    if(qno === 21){
      if(selectedOption === 'Strategic planning and business development') { scores[0]+=10; scores[6]+=10; }
      if(selectedOption === 'Operational efficiency and management' ) { scores[1]+=10; scores[6]+=7; }
      if(selectedOption === 'Marketing and customer relations' ) { scores[2]+=10; scores[7]+=10; }
    }
    
    // Log the selected option
    console.log(`Selected Option: ${selectedOption}`);
    
    // Save user response
    setUserResponses([...userResponses, { question, selectedOption }]);

    // Move to the next question or mark the quiz as completed
    
  };

  const computeScore = (scores) => {
    const scoreFinal = {
      objective_analytical:  scores[0],
      factual_realistic: scores[1],
      outgoing_sociable: scores[2],
      flexible_spontaneous: scores[3],
      reserved_interospective: scores[4],
      idealistic_theoretical: scores[5],
      structural_decisive: scores[6],
      empathetic_sentimental: scores[7]
    };
    
    const thresholdEngineering = 70;
    const thresholdMedical = 60;
    const thresholdBusiness = 50;

// Analyze scores and provide career suggestions
    const careerSuggestions = [];

    if (scoreFinal.objective_analytical >= thresholdEngineering && scoreFinal.factual_realistic >= thresholdEngineering) {
      careerSuggestions.push('Engineering');
    }

    if (scoreFinal.empathetic_sentimental >= thresholdMedical && scoreFinal.reserved_introspective >= thresholdMedical) {
      careerSuggestions.push('Medical');
    }

    if (scoreFinal.outgoing_sociable >= thresholdBusiness && scoreFinal.flexible_spontaneous >= thresholdBusiness) {
      careerSuggestions.push('Business');
    }
      return scoreFinal;
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  const moveNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
    console.log(`${currentQuestionIndex} = ${scores[0]}`);
  }

  const handleQuizSubmit = () => {
    // Calculate and log the score when the user submits the quiz
    const score = computeScore(scores);
    
    // You can also perform other actions like navigating to a results page.
  };

  return (
    <div>
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        handleAnswer={handleAnswer}
        qno={currentQuestion.qno}
      />
      {!quizCompleted && (
        <Center>
           <Button 
          onClick={moveNext}
          width="40%"
          colorScheme="orange"
          variant="solid"
          p="10px"
          marginLeft="50px"
          marginRight="50px"
          marginTop="10px"
          marginBottom="10px"
          borderRadius='10px'
        >
          Next Question
          </Button>
        </Center>
       
      )}
      {quizCompleted && (
        <Center>
          <Link to="/result">
            <Button 
              onClick={handleQuizSubmit}
              width="20%"
              colorScheme="orange"
              variant="solid"
              p="10px"
              marginLeft="400px"
              marginRight="400px"
              marginTop="20px"
              marginBottom="10px"
              borderRadius='10px'
            >
              Submit Quiz
            </Button>
          </Link>
        </Center>
      )}
    </div>
  );
};

export default Quiz;