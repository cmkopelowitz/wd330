const quiz = [
  { name: "Superman",realName: "Clark Kent" },
  { name: "Wonderwoman",realName: "Dianna Prince" },
  { name: "Batman",realName: "Bruce Wayne" },
];

// View Object
// helper object to render and display the game
const view = {
  score: document.querySelector('#score strong'), //how many questions were answered correctly
  question: document.getElementById('question'),  //the question 
  result: document.getElementById('result'),      //states whether answer was correct
  info: document.getElementById('info'),          //
  start: document.getElementById('start'),        //the start button
  response: document.querySelector('#response'),

  render(target,content,attributes) {             //helper function to display text
    for(const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element){                                  //helper function to show an element
    element.style.display = 'block';
  },
  hide(element){                                  //helper function to hide an element
    element.style.display = 'none';
  },
  resetForm(){                                    //clear the answer input
    this.response.answer.value = '';
    this.response.answer.focus();
  },
  setup(){                                        //render game when started
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.resetForm();
  }, 
  teardown(){                                     //resets the game display
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
  }
};

// game object
// controls game logic
const game = {
  start(quiz){                                    //reset score
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
  },
  ask(name){                                      //
    if(this.questions.length > 0) {
      this.question = this.questions.pop();
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question,question);
    } else {
      this.gameOver();
    }
  },
  check(event){
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      this.score++;
      view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    view.resetForm();
    this.ask();
  },
  gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
  }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);