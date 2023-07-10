//GAME RULES

//player 1 (jack) attacks first
//enemy attacks back
//when enemy is defeated switch enemy
//we want the option to retreat
//if jack is defeated, GAME OVER
//if jack retreats, GAME OVER
//if jack defeats all enemies, YOU WIN
//we want to restart the game after finished

//--------------------------------

//FUNCTIONS

//we want a function for attacking (A button)
//we want a function for music (Music button)
//we want a function for jack running across the screen (Start button)
//we want a function for retreating (B button)
//we want a function for starting over (cartoon network logo)

//-------------------------------------

//OBJECTS 

//for enemies
//for jack
//for music

//---------------------------------------

//QUERY SELECTORS

//for new enemies pics
//for new enemies scenes
//for music

//--------------------------------------

const generateRandomNum = (min, max) => {
  let rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};

let player1 = {
  name: "YOU",
  health: 20,
  firepower: 5,
  accuracy: 7,
};

let op1 = {
  name: "YOUR PEERS",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://giffiles.alphacoders.com/107/107307.gif",
  text: 'Ah, YOUR PEERS! Will "Peer Pressure" get you?...again?'
};

let op2 = {
  name: "RELATIONSHIPS",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://giffiles.alphacoders.com/107/107066.gif",
  text: "RELATIONSHIPS? YUCK! Will love conquer you?"
};

let op3 = {
  name: "PUBLIC OPINION",
  hull: generateRandomNum(13, 16),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://giffiles.alphacoders.com/107/107096.gif",
  text: "Why have an opinion when you have PUBLIC OPINION?"
};

let op4 = {
  name: "SUCCESS",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://i.kym-cdn.com/photos/images/original/001/050/090/deb.gif",
  text: "Your soul in exchange for SUCCESS. Sounds about right?"
};

let op5 = {
  name: "SOCIETAL NORMS",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:"https://giffiles.alphacoders.com/107/107489.gif",
  text: "Going outside of SOCIETAL NORMS? Ha! Good luck!"

};

let op6 = {
  name: "YOUR EGO",
  hull: generateRandomNum(18, 20),
  firepower: generateRandomNum(4, 5),
  accuracy: generateRandomNum(6, 8),
  image: "https://i.gifer.com/10OV.gif",
  text: "Well, well, well. If it's not the man in the mirror..."
};

let allChal = [op1, op2, op3, op4, op5, op6];
let currentChal = op1;
let counter = 0
console.log(counter,":Counter")

console.log("Current Challenge:", currentChal)


const determineLifeHero = () => {
  console.log(player1.health);
  if (player1.health <= 0) {
   alert("Game Over")
  } else {
    startRound(currentChal)
  }
};

const determineLife = () => {
    console.log(currentChal.hull);
    if (currentChal.hull <= 0) {
      switchChal();
      counter++
      currentChal = allChal[counter]
      console.log("Current Challenge:", currentChal)
    if(refreshGame() === false){
      return
    }
  
    } else {
      chalAttack()
      determineLifeHero()
    }
  };

const startRound = () => {
  switchChal();

  console.log(currentChal);
  let power = player1.firepower;
  let opponentLife = currentChal.hull;
  let shot = (opponentLife -= power);
  setTimeout(shotdamage(shot), 5000);
  console.log(`${player1.name} shot ${currentChal.name} with power of ${power}`);
  console.log(`${currentChal.name}'s life is now ${shot}`);
  // --------------------------------------
  determineLife();

};

//--with assistance from Jenna
const shotdamage = (shot) =>{
  currentChal.hull = shot
}


const switchChal = () => {
    console.log("CHALLENGE SWITCHED");
    let newBox = document.querySelector(".enemy");
    let newPic = document.createElement("img");
    newPic.setAttribute("src", allChal[counter].image);
    newPic.setAttribute("class", "enemy");
    newBox.replaceWith(newPic);

    let newhealth = document.querySelector('.health')
    let newfirepower = document.querySelector('.firepower')
    let newaccuracy = document.querySelector('.accuracy')
    newhealth.innerHTML = allChal[counter].hull
    newfirepower.innerHTML = allChal[counter].firepower
    newaccuracy.innerHTML = allChal[counter].accuracy

    let newtext = document.querySelector('.screentext')
    newtext.innerHTML = allChal[counter].text

    let newname = document.querySelector('.topname')
    newname.innerHTML = allChal[counter].name
  };
    
const chalAttack = () => {
    console.log("CHALLENGE IS NOW ATTACKING")
  let strength = currentChal.firepower;
  let chalAttack = (player1.health-=currentChal.firepower);
  player1.health = chalAttack;
  console.log(
    `${player1.name} got shot  by ${currentChal.name} with power of ${strength}`
  );
  console.log(`${player1.name}'s life is now ${chalAttack}`);
};

const refreshGame = () =>{
  if(op6.hull <= 0){
    alert("Congrats. You have accomplished peace. Your next challenge is the discipline that comes with this newly acquired peace. I shall see you again...")
    return false
  }
  return true
}