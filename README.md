# Project-Game
Project Game is a interactive rendition of Space Battle from a previous Per Scholas assignment

The rules of the game are the following:
1. Story must be controlled by buttons
2. Must have a reset button
3. Must be a two player game
4. A win state
5. A lose state
6. A way to keep playing if the game is not over
7. Multiple rounds to play

1. For step one, we have a StartRound function that has the player 1 attack the enemy and vice versa
the Start function also has other functions that are interlocked with it to perform functions that affect the CSS of the code

2. We have a swap function attched to a button that gives the user a prompt on if they want to quit, which reloads the page

3. There is a player 1 and "player 2", with the player 2 swapping after they are defeated

4. After all enemies are defeated, we have a function named endGame that alerts the browser, congratulating them on the win

5. Technically there isn't a lose state because the player wins but that can always be changed during presentation

6. There is an if statement that allows player1 to keep attacking if A. all enemies are not defeated or B. he chooses not to retreat

7. After a enemy is defeated, that starts the next round

STYLING:

I wanted to go with a retro, pokemon/arcade style. It just has a nostalgic feel to it. My first attempt felt a little too static as far as presentation was concerned. This last submission feels more interactive, which I'm proud of

CHALLENGES:

LOCAL & GLOBAL - I was having issues with calling certain variables to operate in different functions. For example, "shot" would equal a combination of global strings but "shot" itself was inside of a function and I would get undefined errors whenever I tried to use it outside of that function. Thankfully, I read Eloqent Javascript and it helped get clarity on that issue.

METHODS - Methods were giving me problems and its only because I wasn't too knowledgable about them but that made me have to look it up whether it was in Eloqent Javascript, Google, or asking for help from fellow classmates. Honestly, I'm still trying to wrap my head around methods and their application but I'm definitely further along with knowing the concept than before

RETURNS - Returns are something I still need to get in the habit of using. I know their usecase but I haven't used them enough to say I'm comfortable adding them to my code. So definitely need improvement in that area

WIREFRAMING - I get wireframing the HTML but I need to wireframe it better. Including what div is going to do what in Javascript

CONCLUSION: 

Overall, I'm proud of my work. I've came a long way from where I began as far as understanding certain things more. I definitely have room for improvement and I know that I'm capable of making those adjustments. Its just a matter of continuing to be more thorough which I feel like I'm getting in the habit of as far as researching, application, and presentation.

