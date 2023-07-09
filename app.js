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
  name: "Samurai Jack",
  health: 20,
  firepower: 5,
  accuracy: 7,
};

let op1 = {
  name: "Your Peers",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://giffiles.alphacoders.com/107/107307.gif",
  scene: "https://comicvine.gamespot.com/a/uploads/original/11127/111273287/5781238-giphy%20%284%29.gif"
};

let op2 = {
  name: "Relationships",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://giffiles.alphacoders.com/107/107066.gif",
  scene: "https://media.tenor.com/o1sB7ZRzA88AAAAd/cartoon-fight-cartoon-fight-scene.gif"
};

// ++
let op3 = {
  name: "Public Opinion",
  hull: generateRandomNum(13, 16),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://giffiles.alphacoders.com/107/107096.gif",
  scene: "https://thumbs.gfycat.com/AnySlowChipmunk-max-1mb.gif"
};

let op4 = {
  name: "Success",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://i.kym-cdn.com/photos/images/original/001/050/090/deb.gif",
  scene: "https://i.kym-cdn.com/photos/images/original/001/050/090/deb.gif"
};
let op5 = {
  name: "Societal Norms",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:"https://giffiles.alphacoders.com/107/107489.gif",
  scene: "https://64.media.tumblr.com/bae3170ecf89b3ebba19b5c1ab7d2dbf/tumblr_ne0549xxF31rvb8cmo1_400.gifv"

};
let op6 = {
  name: "Your Ego",
  hull: generateRandomNum(18, 20),
  firepower: generateRandomNum(4, 5),
  accuracy: generateRandomNum(6, 8),
  image: "https://i.gifer.com/10OV.gif",
  scene: "https://i.gifer.com/10OX.gif"
};

let allChal = [op1, op2, op3, op4, op5, op6];
let currentChal = op1;
let counter = 0
console.log(counter,":Counter")

console.log("Current Challenge:", currentChal)


const determineLifeHero = () => {
  console.log(player1.hull);
  if (player1.hull <= 0) {
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
  console.log(currentChal);
  let power = player1.firepower;
  let opponentLife = currentChal.hull;
  let shot = (opponentLife -= power);
  currentChal.hull = shot;
  console.log(`${player1.name} shot ${currentChal.name} with power of ${power}`);
  console.log(`${currentChal.name}'s life is now ${shot}`);
  // --------------------------------------
  determineLife();
};


const switchChal = () => {
    console.log("CHALLENGE SWITCHED");
    let newBox = document.querySelector(".enemy");
    let newPic = document.createElement("img");
    newPic.setAttribute("src", allChal[counter].image);
    newPic.setAttribute("class", "enemy");
    newBox.replaceWith(newPic);

    let newName = document.querySelector()
  };
    
const chalAttack = () => {
    console.log("CHALLENGE IS NOW ATTACKING")
  let strength = currentChal.firepower;
  let chalAttack = (player1.hull-=currentChal.firepower);
  player1.hull = chalAttack;
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