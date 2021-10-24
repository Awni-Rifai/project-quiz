const signupBtn=document.querySelector('.signup-btn');
const container=document.querySelector('.main-section');
let fetchedQuiz='';
let  questionsObject;
let name;//the name that should be passed to the function generate cards we defined it here and we assign a value to them

//we should hide the card sections since it has 100vh style and it will push the content down
//these are global variables and they should be reseted when we finish the exam
let counter=1;
const userAnswersArr=[];
const correctAnswersArr=[];
let wrongAnswers=0;
let correctAnswers=0;

/*Views Logic*/

const generateLoginPage=()=>{
  container.innerHTML="";
    
    const markup=`  <section class="login-section">
    <div class="container">
        <form class="login-form">
          <h2>Login</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control login-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@domain.com">
               <div class="div-email"> </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control login-password" id="exampleInputPassword1" placeholder="password">
              <div class="div-password"></div>
            </div>
          </form>
          <div class="col text-center">
            <button type="submit" class="login-btn btn btn-primary w-50 text-center" >Login</button>
            <div class="div-btn mt-2"></div>
          </div>
    </div>
</section>`
container.insertAdjacentHTML('afterbegin',markup);
}
/*-----------------generate welcome-page-------------------------------*/
const genrateCardsPage=(name)=>{
  //here the parent element that we append is card section
  //the name should be passed to the geneerate cardsPage
  container.innerHTML="";
  
    const markup=` <div>
    <div>
     <img src="" alt="logo">
    </div>
    <div class = "welcome-name"> Welcome ${name}</div>
    <div class="container mt-5 mb-3">
     <div class="row">
         <div class="col-md-4">
             <div class="card card-HTML p-3 mb-2">
                 <div class="d-flex justify-content-between">
                     <div class="d-flex flex-row align-items-center">
                         <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                         <div class="ms-2 c-details">
                             <h6 class="mb-0">HTML</h6> <span>1 days ago</span>
                         </div>
                     </div>
                     <div class="badge"> <span>QUIZ</span> </div>
                 </div>
                 <div class="mt-5">
                     <h3 class="heading">Standard Markup<br> La nguage</h3>
                     <div class="mt-5">
                         <div class="progress">
                             <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                         <div class="mt-3"> <span class="text1">32 attend <span class="text2"></span></span> </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-md-4">
             <div class="card card-CSS p-3 mb-2">
                 <div class="d-flex justify-content-between">
                     <div class="d-flex flex-row align-items-center">
                         <div class="icon"> <i class="bx bxl-dribbble"></i> </div>
                         <div class="ms-2 c-details">
                             <h6 class="mb-0">CSS</h6> <span>4 days ago</span>
                         </div>
                     </div>
                     <div class="badge"> <span>Quiz</span> </div>
                 </div>
                 <div class="mt-5">
                     <h3 class="heading">Cascading Style <br>Sheets</h3>
                     <div class="mt-5">
                         <div class="progress">
                             <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                         <div class="mt-3"> <span class="text1">42 attend <span class="text2"></span></span> </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-md-4">
             <div class="card card-JS p-3 mb-2">
                 <div class="d-flex justify-content-between">
                     <div class="d-flex flex-row align-items-center">
                         <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                         <div class="ms-2 c-details">
                             <h6 class="mb-0">JS</h6> <span>5 days ago</span>
                         </div>
                     </div>
                     <div class="badge"> <span>Quiz</span> </div>
                 </div>
                 <div class="mt-5">
                     <h3 class="heading">Java Script <br>JS</h3>
                     <div class="mt-5">
                         <div class="progress">
                             <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                         <div class="mt-3"> <span class="text1">52 Applied <span class="text2"></span></span> </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>`
container.insertAdjacentHTML('afterbegin',markup)
}
/*---------------------Generate exam------------------------*/
const generateExamBrief=(quizName)=>{
  //we should know the exam type
  
 
  container.innerHTML="";
  

  const markup=`
  
  <div class="container-brief p-5 w-75">
    <div class="d-flex align-items-center flex-column">
      <h1>Welcome to the ${quizName} Quiz</h1>
      <h4>
        This quiz will test your basics of ${quizName} and will contain
        <strong>10 questions</strong>
        about tags, general information and more. Each question will have
        <strong>one point</strong>
        you either get the point or not,
        <br />
        the estimated time for this exam is
        <strong>ten minutes.</strong>
        <br />
        Wish you the best of luck
      </h4>
      <button type="button" class="btn btn-primary start-btn ${quizName} w-50">
        Start ${quizName} quiz
      </button>
      <button type="button" class="btn btn-primary back-btn mt-4 w-50">
        Back
      </button>
      
    </div>
  </div>
  
  
`
container.insertAdjacentHTML('afterbegin',markup);
}
/*---------------------------Generate exam-----------------------*/
  genrateExamPage=()=>{
    //this function will only generate the exam page skeleton not the exam questions
    container.innerHTML="";
    const markup=`<section class="questions-section">
    <div class="container">
      <h2 class="section-title">Questions</h2>
      <div class="row">
          
      </div>
      <input class="btn btn-primary w-25 ms-auto next-btn"  type="button" value="next">
    </div>
  </section>`
  container.insertAdjacentHTML('afterbegin',markup)
  }
  //generate each question
  const generateQuestion=function(question){
    const container=document.querySelector('.questions-section .row');
    container.innerHTML="";
    //edit the styles

    const markup=` 
    <div class="question d-flex">
      <h2 class="question">${question.question}  </h2>
      <h4 class="question-count">${counter}/10</h4>
    </div>
    <div class="answers-section">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" data-answer="a" id="answer-1">
        <label for="answer-1">
          ${question.a}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" data-answer="b" id="answer-2">
        <label for="answer-2">
        ${question.b}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" data-answer="c" id="answer-3">
        <label for="answer-3">
        ${question.c}
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" data-answer="d" id="answer-4">
        <label for="answer-4">
        ${question.d}
        </label>
      </div>
    </div>
    
  `
 
  container.insertAdjacentHTML('afterbegin',markup);
}
generateResultsPage=(correctAnswers)=>{
  //arr [[correct answers from local storage],[user's answer length:10],correct answers(number),wrong answers(number)]
 
  container.innerHTML="";
 
  

  
  const markup=`<section class ="grade-section ">
  <div class = "grade ">
    <h2>Your result is : ${correctAnswers}/10 </h2>
    
          <h2>
               ${correctAnswers>5?'you passed the exam':'you failed the exam'}
           </h2>
     <!-- <i class="fas fa-times wrong "></i>-->
           <i class="fas ${correctAnswers>5?'fa-check':'fa-times wrong'}"></i>
      <h2>Your have ${correctAnswers} correct answer </h2>

       <h2>
           Your have ${10-correctAnswers} wrong answers
       </h2>
  </div>
  <button class="show-results-btn">show results</button>


</section>`

container.insertAdjacentHTML('afterbegin',markup);

if(correctAnswers>=5){
  
  container.style.background="green";
}
else{
  container.style.background="red";
  
} 
}
generateDisplayResultsPage=()=>{
  container.style.display="flex";
  container.innerHTML="";
  container.style.background="linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"
  const markup=`<div class="container">
  <div class="d-flex justify-content-center align-items-center flex-wrap p-lg-5">
      
  </div>
</div>`;
  container.insertAdjacentHTML('afterbegin',markup);

}

const generateQuestionResults=()=>{
  //this function will generate each result one by one
  //questionObject
  /* questionObject={question1:{}}*/
  const questionContainer=document.querySelector('.container div');
  for(let i=1;i<11;i++){
    const markup=`<div class=" card w-75 p-5 my-3 shadow">
    <h2 class="mb-5 font-small-sm">Q${i} ${questionsObject[`question${i}`].question}</h2>
    <ul class="list-group results-list ul--${i}">
       <li class="list-group-item a">a ${questionsObject[`question${i}`].a}</li>
       <li class="list-group-item b">b ${questionsObject[`question${i}`].b}</li>
       <li class="list-group-item c">c ${questionsObject[`question${i}`].c}</li>
       <li class="list-group-item d">d ${questionsObject[`question${i}`].d}</li>
       
     </ul>
   
 </div>`
 
 questionContainer.insertAdjacentHTML("afterbegin",markup)
 //select all the li answers
 const answers=document.querySelectorAll(`.ul--${i} li`);
 console.log(answers);
 //loop throught the lis in order to find the user's answer
 answers.forEach(answer=>{
   //if the li contains a class that is the same as the user answer 
   if(answer.classList.contains(userAnswersArr[i-1])){
     //if the user's answer is correct change the backdound to green
     if(userAnswersArr[i-1]===correctAnswersArr[i-1]){
       answer.style.backgroundColor="green"
     }
     else{
      answer.style.backgroundColor="red"
     }

   }
  //  //show the correct answer
   if(answer.classList.contains(correctAnswersArr[i-1])){
      answer.style.backgroundColor="green";
    }
 })
 
  }

}
/*------------------------------------------------------------------------------------------*/
/*Validation*/
/*----------------------------------SignUp Validation-----------------------------------------*/
//name Input 
const firstName = document.querySelector(".firstNameInput");
const PFirstName =document.querySelector(".firstNameP")
//email input 
const emailInput = document.querySelector(".emailInput");
const emailP = document.querySelector(".emailP");
const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//password 
const passwordInput = document.querySelector(".passwordInput");
const passwordP = document.querySelector(".passwordP")
const  passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//button
const submitbtn = document.querySelector(".signup-btn ");
function signup(){
  //name check 
  let nameCheck=false;
  let passCheck=false;
  let emailCheck=false;
  if(firstName.value===""){
  PFirstName.innerHTML="The First Name field is required."
  PFirstName.style.color="red"}
  else{
    PFirstName.innerHTML="";
    nameCheck=true;

  }

//email cheack and validation 
  if(emailInput.value===""){
    emailP.innerHTML="The email field is required."
    emailP.style.color="red"
  }
  if(!emailInput.value.match(emailPattern)){
    emailP.innerHTML="Please Enter a valid email"
    emailP.style.color="red"}
    else{
      emailP.innerHTML="";
      emailCheck=true
   }
//password cheak and validation 
if(passwordInput.value===""){
  passwordP.innerHTML="The password field is required"
  passwordP.style.color="red"
  }
  if(!passwordInput.value.match(passwordPattern)){
    passwordP.innerHTML="password must be Az@#123"
      passwordP.style.color="red"}
    else{
      passwordP.innerHTML=" ";
      passCheck=true
    }
    
    const validation={
      username : firstName.value,
      usermail : emailInput.value,
      userpass: passwordInput.value,
}
  
 if(emailCheck && passCheck && nameCheck){
  localStorage.setItem(emailInput.value,JSON.stringify(validation));
 return true;

 } 
}
/*------------------------------------------------------------------------------------------*/
/*----------------------------Login Validation-----------------------------------------------*/
 
 /*This function renders the error message to the screen*/
 const renderError=(input,err)=>{
  const loginEmail= document.querySelector('.login-email');
  const loginPassword= document.querySelector('.login-password');
  const divEmail = document.querySelector('.div-email');
  const divPassword = document.querySelector('.div-password');
     if(input===loginEmail){
       divEmail.innerHTML =err;
   divEmail.style.color="red"
     }
     if(input===loginPassword){
       divPassword.innerHTML =err;
       divPassword.style.color="red";
     }

 }
 const loginValidation=(input)=>{
     try{
      const loginEmail= document.querySelector('.login-email');
      
      const divEmail = document.querySelector('.div-email');
      const mail_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      // password 
      const loginPassword= document.querySelector('.login-password');
      const divPassword = document.querySelector('.div-password');
      const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(input===loginEmail){
       if (loginEmail.value == "")throw new Error('The email field is required.');
       if(!loginEmail.value.match(mail_format))throw new Error('Not Valid');
       if(!localStorage.getItem(loginEmail.value))throw new Error('The email you entered isn’t connected to an account')
       else divEmail.innerHTML="";
      }
      else{
       if(loginPassword.value == "")throw new Error('The password field is required');
       if(!loginPassword.value.match(regularExpression))throw new Error('The passwod must have 6-16 char,a-zA-Z0-9');
       if(!localStorage.getItem(loginEmail.value))throw new Error('enter your email')
       const localPassword=(JSON.parse(localStorage.getItem(loginEmail.value))).userpass;
       
       if(localPassword!==loginPassword.value)throw new Error('Password incorrect');
       else{
           divPassword.innerHTML="";
           
           return true;
       }
      


       

      }
       


     }
     catch(err){
         renderError(input,err);
          

     }
 }
 /*---------------------------------------Quiz Logic-------------------------------*/
 const fetchQuestion=function(examName){
  //this function takes the questions from json file
  console.log(counter);
  if(counter>10)return
  let url="";
  if(examName==='HTML')url='js/html-question.json';
  if(examName==="JS")url='js/jsExam.json';
  fetch(url).then(res=>res.json())
.then(questions=>{

  //questions is an object inside of it obj={question1:a:'' b:'' c:'' d:'' correct:''}
  //if we reach question 10 then return we don't need to fetch anymore
  //question is the object inside the main object 
  //we will generate one question each time we click next
  
  const question=questions[`question${counter}`];
  //question= questions[question1]=>{question1 text:a:'' b:'' c:'' d:'' correct:''}
  //here we will pass the question object to the generation function
    generateQuestion(question);
//now the first question will be generated
//nextBtn.style.display="inline-block";
counter++





})
}
const compareAnswers=function(url){
    
  fetch(url).then(res=>res.json())
  .then(questions=>{
      //for loop that compare each answer
      //declaring a variable that contains all of our questions
       questionsObject=questions;
      
     
      for(let i=1;i<11;i++){
          const userAnswer=sessionStorage.getItem(`question${i}`)
          const correctAnswer=questions[`question${i}`].correct;
          userAnswersArr.push(userAnswer);
          correctAnswersArr.push(correctAnswer);

          if(userAnswer===correctAnswer)correctAnswers++;
          else wrongAnswers++;
          
      }
      //we should put the user answer and the correct answers in an array in order to display them
      //we will create a function called display comparison that will generate html
      //from the user answers and correct answers or we should put the user answer in an obj
      //with the value correct or not

      //here we called this function in order to get the caomparison data after the fetch is finished
      generateResultsPage(correctAnswers)
      
     
      

  })
  
  
}








































//here we put a listener to the whole document and inside of it we specify each button
document.addEventListener('click',(e)=>{
 
  // button
  /*we put these variables in inside the listner in order to be redifined when the html is generated*/
  /*if we put them outside the listener they will be defined once and if they are not exicited like log-in btn it will be null*/

  const loginBtn = document.querySelector('.login-btn');
  const htmlCard=document.querySelector('.card-HTML');
  const cssCard=document.querySelector('.card-CSS');
  const jsCard=document.querySelector('.card-JS');
  const backBtn=document.querySelector('.back-btn');
  const loginEmail= document.querySelector('.login-email');
    const loginPassword= document.querySelector('.login-password');
    const startQuizBtn=document.querySelector('.start-btn');
    const nextBtn=document.querySelector('.next-btn');
    const showResultsBtn=document.querySelector('.show-results-btn');

    
    if(loginEmail && loginEmail.value){
      //here if we have a value for the login Email and also if the element is excited also since it will
      //be generated later 
       name=(JSON.parse(localStorage.getItem(loginEmail.value))).username;
      
    }
   
  /*Signup btn*/ 
  if(e.target===submitbtn){
    if(signup())generateLoginPage();
    /*we need to make a pop up that genrate a message to the user when the data is saved*/
    //if(signup())gnerateSignupMessage();
    
  }
  /*---------------------------------------------------------*/
  /*login btn*/
  if(e.target===loginBtn){
    
    
    loginValidation(loginEmail);
          //returns true in order to move to the next page
    if(loginValidation(loginPassword)){
      genrateCardsPage(name);
    }


  }
  /*--------------------------------------------------------*/
  /*Card Listners*/
  
  if(e.target===htmlCard){
    fetchedQuiz="HTML"
    generateExamBrief(fetchedQuiz)
  }
  if(e.target===cssCard){
    fetchedQuiz="CSS"
    generateExamBrief(fetchedQuiz)
  }
  if(e.target===jsCard){
    fetchedQuiz="JS"
    generateExamBrief('JS')
  }
  if(e.target===backBtn){
    
    genrateCardsPage(name)
  }
  /*------------------------------------------------------------*/
  //check if the button contains a class either HTML CSS or JS
  if(e.target===startQuizBtn){
    if(startQuizBtn.classList.contains('HTML')){
      genrateExamPage();
    fetchQuestion(fetchedQuiz);

    }
    if(startQuizBtn.classList.contains('JS')){
      genrateExamPage();
    fetchQuestion(fetchedQuiz);

    }

    
    
    

    
  }
  //next Btn Listner
  if(e.target===nextBtn){
    //replace the next btn with the submit btn
    if(counter===10)nextBtn.value="submit answer";
    //select all of the input choices
    const inputs=document.querySelectorAll('.form-check-input');
    //when we finish the exam we need to cpmare answers
    if(counter===11){
      if(fetchedQuiz==='HTML'){
        compareAnswers('js/html-question.json');

        

       
      };
      if(fetchedQuiz==="JS"){
        compareAnswers('js/jsExam.json');
        


      };
     
      
    }
    //loop through the 4 answers and check if one of them is checked
    //then store the checked one in session storage
    //then fetch a new question
inputs.forEach(input=>{
    if(input.checked){
        const userAnswer=input.dataset.answer;
        sessionStorage.setItem(`question${counter-1}`,userAnswer);
        
        
        
        fetchQuestion(fetchedQuiz);

    }
    //else throw new error
})    
  }
  /*-----------------------------------*/
  if(e.target===showResultsBtn){
    generateDisplayResultsPage()
    generateQuestionResults();
    


  }

})
