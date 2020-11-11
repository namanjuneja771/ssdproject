//console.log(quiz)
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion ;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
//push the question into availableQuestion array
function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	//console.log(totalQuestion)
	for(let i=0;i<totalQuestion;i++){
		availableQuestions.push(quiz[i])
		//console.log(quiz[i])
	}
	//console.log(availableQuestions)
} 
//set question number and question text and option
function getNewQuestion(){
	//set question number
	//console.log("navneet")
	questionNumber.innerHTML ="Question"+"  "+(questionCounter + 1)+"  "+"of"+"  "+quiz.length;
	//set question text 
	//get random question
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
	
	currentQuestion=questionIndex;
	questionText.innerHTML =  currentQuestion.q;
	//get the position of 'questionIndex' from the availableQuestion Array;
	const index1 = availableQuestions.indexOf(questionIndex);
	//console.log(index1)
	//remove the 'questionIndex' from the availableQuestion Array ,so that question not repeat
	availableQuestions.splice(index1,1);
	// console.log(questionIndex)
	// console.log(availableQuestions)
	//console.log(currentQuestion.options)

	const optionLen = currentQuestion.options.length;
	//push options into availableOptions Array
	for(let i=0; i<optionLen;i++){
		availableOptions.push(i)
	}

	optionContainer.innerHTML="";
	
	let animationDelay = 0.15;
	//create option in html
	for(let i=0;i<optionLen;i++){
		//random option
		const optionIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
		//get the position of 'optionIndex' from the  availableOptions so otion not repeat
		const index2 = availableOptions.indexOf(optionIndex);
		//remove the option optionIndex from the availableoptions so option not repeat
		//console.log(index2);
		availableOptions.splice(index2,1);
		//console.log(optionIndex);
		//console.log(availableOptions);
		const option = document.createElement("div");
		//const  option = document.getElementByClassName('option')
		option.innerHTML = currentQuestion.options[optionIndex];
		option.id =optionIndex;
		option.style.animationDelay =animationDelay +'s';
		animationDelay = animationDelay +0.15
		option.className = "option";
		optionContainer.appendChild(option)	
		option.setAttribute("onclick","getResult(this)");
	}

	questionCounter++;
}
//get the result of current attempt
function getResult(element){
	//console.log(element.innerHTML)
	const id = parseInt(element.id);
	if(id === currentQuestion.answer){
		//console.log("answer is correct");
		element.classList.add("correct");//set green color
		correctAnswers++;	
	}
	else{
		//console.log("answer is wrong");
		element.classList.add("wrong");//set red color
  	 }
	attempt++;
	unclickableOptions();
}
//choose only one option
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for(let i=0;i<optionLen;i++){
		optionContainer.children[i].classList.add("already-answered");
	}
}
function next(){
	if(questionCounter === quiz.length){
		//console.log("quiz over")
		ouizOver();
	}
	else{
		getNewQuestion();
	}
}
function ouizOver() {
	quizBox.classList.add("hide");//hide quiz box
	resultBox.classList.remove("hide");
	quizResult();
}
function quizResult(){
	resultBox.querySelector(".total-question").innerHTML = quiz.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = attempt-correctAnswers;
	resultBox.querySelector(".total-score").innerHTML = correctAnswers +"/" + quiz.length;
}
function resetQuiz(){
	questionCounter = 0;
	correctAnswers = 0;
	attempt = 0;
}

function tryAgainQuiz(){
	resultBox.classList.add("hide");
	quizBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}
function goToHome(){
	resultBox.classList.add("hide");
	homeBox.classList.remove("hide");
	resetQuiz();
}
//..........................................................
//..........................................................
//..........................................................
// function startQuiz(){
// 	console.log("Navneet Singh");
// }
function startQuiz(){
	//hide home box
	homeBox.classList.add("hide");
	//show quiz box
	quizBox.classList.remove("hide");
	//first set all question in availableQuestion array
	setAvailableQuestions();
	//second we will call getNewQuestion; function	
	getNewQuestion();
}
window.onload = function(){
	homeBox.querySelector(".total-question").innerHTML = quiz.length;
}