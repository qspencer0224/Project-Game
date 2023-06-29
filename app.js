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
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e0e1d88-0a8d-49ab-9d3b-c2dd43519fb3/delucx1-e4a96323-d05c-4c8b-a824-cb0f32d80c04.png/v1/fill/w_697,h_1146/the_scotsman_by_dr_feelgood248_delucx1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc3NiIsInBhdGgiOiJcL2ZcLzllMGUxZDg4LTBhOGQtNDlhYi05ZDNiLWMyZGQ0MzUxOWZiM1wvZGVsdWN4MS1lNGE5NjMyMy1kMDVjLTRjOGItYTgyNC1jYjBmMzJkODBjMDQucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uHQO7bqTt_hlnXP941w2jQ_eO0owMfpvmfunnkjOg0Y",
    scene: "https://comicvine.gamespot.com/a/uploads/original/11127/111273287/5781238-giphy%20%284%29.gif"
  };
  
  let op2 = {
    name: "Relationships",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image: "https://static.wikia.nocookie.net/samuraijack/images/1/1c/Ashi_DoA.png/revision/latest?cb=20230303111159",
    scene: "https://media.tenor.com/o1sB7ZRzA88AAAAd/cartoon-fight-cartoon-fight-scene.gif"
  };
  
  // ++
  let op3 = {
    name: "Public Opinion",
    hull: generateRandomNum(13, 16),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image: "https://media3.giphy.com/media/C3ByEpHvHupHi/giphy.gif",
  };
  
  let op4 = {
    name: "Success",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
  };
  let op5 = {
    name: "Societal Norms",
    hull: generateRandomNum(3, 6),
    firepower: generateRandomNum(2, 4),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
  };
  let op6 = {
    name: "Yourself",
    hull: generateRandomNum(18, 20),
    firepower: generateRandomNum(4, 5),
    accuracy: generateRandomNum(6, 8),
    image:
      "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
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
      let newBox = document.querySelector(".right");
      let newPic = document.createElement("img");
      newPic.setAttribute("src", allChal[counter].image);
      newPic.setAttribute("class", "right");
      newBox.replaceWith(newPic);

      let newScene = document.querySelector(".mid");
      let newGif = document.createElement("img");
      newGif.setAttribute("src", allChal[counter].scene);
      newGif.setAttribute("class", "mid");
      newScene.replaceWith(newGif);

    };
      
    

  const chalAttack = () => {
      console.log("CHALLENGE IS NOW ATTACKING")
    let strength = currentChal.firepower;
    let chalAttack = (player1.hull-=currentAlien.firepower);
    player1.hull = chalAttack;
    console.log(
      `${player1.name} got shot  by ${currentChal.name} with power of ${strength}`
    );
    console.log(`${player1.name}'s life is now ${chalAttack}`);
  };