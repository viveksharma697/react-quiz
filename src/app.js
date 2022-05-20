import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who is the Chief Minister of Punjab?',
			answerOptions: [
				{ answerText: 'Arvind Kejriwal', isCorrect: false },
				{ answerText: 'Bhagwant Singh Mann', isCorrect: true },
				{ answerText: 'Manish Sisodiya', isCorrect: false },
				{ answerText: 'Navjot Singh Sidhu', isCorrect: false },
			],
		},
		{
			questionText: 'When is the International Yoga Day celebrated ?',
			answerOptions: [
				{ answerText: 'June 21', isCorrect: true },
				{ answerText: 'March 21', isCorrect: false },
				{ answerText: 'April 22', isCorrect: false },
				{ answerText: 'May 31', isCorrect: false },
			],
		},
		{
			questionText: '"Line of Blood" is a book written by whom?',
			answerOptions: [
				{ answerText: 'Bairaj Khanna', isCorrect: true },
				{ answerText: 'Ursule Vernon', isCorrect: false },
				{ answerText: 'Amal El-Mohtar', isCorrect: false },
				{ answerText: 'Diksha Basu', isCorrect: false },
			],
		},
		{
			questionText: 'The motif of "Hampi with Chariot" is printed on the reverse of which currency note ?',
			answerOptions: [
				{ answerText: 'One Rupee Note', isCorrect: false },
				{ answerText: 'Rs. 500 note', isCorrect: false },
				{ answerText: 'Rs. 50 note', isCorrect: true },
				{ answerText: 'Rs. 1000 note', isCorrect: false },
			],
		},
		{
			questionText: 'World Tourism Day is celebrated on-',
			answerOptions: [
				{ answerText: 'September 12', isCorrect: false },
				{ answerText: 'September 25', isCorrect: false },
				{ answerText: 'September 27', isCorrect: true },
				{ answerText: 'September 29', isCorrect: false },
			],
		},
		{
			questionText: 'A computer cannot "boot" if it does not have the _____',
			answerOptions: [
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Operating System', isCorrect: true },
				{ answerText: 'Loader', isCorrect: false },
				{ answerText: 'Assembler', isCorrect: false },
			],
		},
		{
			questionText: 'The tropic of cancer does not pass through which of these Indian states ?',
			answerOptions: [
				{ answerText: 'Madhya Pradesh', isCorrect: false },
				{ answerText: 'Rajasthan', isCorrect: false },
				{ answerText: 'West Bengal', isCorrect: false },
				{ answerText: 'Odisa', isCorrect: true },
			],
		},
		{
			questionText: 'Fathometer is used to measure',
			answerOptions: [
				{ answerText: 'Earthquakes', isCorrect: false },
				{ answerText: 'Ocean depth', isCorrect: true },
				{ answerText: 'Rainfall', isCorrect: false },
				{ answerText: 'Sound Intensity', isCorrect: false },
			],
		},
		{
			questionText: 'The purest form of iron is ',
			answerOptions: [
				{ answerText: 'wrought iron', isCorrect: true },
				{ answerText: 'pig iron', isCorrect: false },
				{ answerText: 'steel', isCorrect: false },
				{ answerText: 'nickel steel', isCorrect: false },
			],
		},
		{
			questionText: 'The working principle of a washing machine is',
			answerOptions: [
				{ answerText: 'reverse osmosis', isCorrect: false },
				{ answerText: 'centrifugation', isCorrect: true },
				{ answerText: 'diffusion', isCorrect: false },
				{ answerText: 'dialysis', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}