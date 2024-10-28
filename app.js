/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

/*
As there is no requirement for using JS vs Index scripts
*rubric and requirements are met

## Objective

Using React and Local Storage, create an interactive version of the game Scramble.

Requirements

1. An array of words must be created. The words should not include spaces or special characters. There must be at least 10 words in the array.

2. The game should be persistent. The player's progress should be tracked throughout the game and stored in local storage.

3. The player must be able to guess by typing into a textbox and hitting enter. Once a guess has been made, correct or incorrect, the textbox should be cleared. Making a guess should NOT cause a page refresh.

4. If the guess is correct, a new scrambled word should appear.

5. If the guess is incorrect, the current scrambled word should remain.

6. After each guess, the player should receive a response telling whether the guess was correct or incorrect.

7. After each guess, the number of points or strikes should be updated and displayed for the player.

8. If the player clicks on the pass button and has at least one pass remaining, the current word should be removed, and the next scrambled word should be displayed.

9. If the player makes it through the entire list of words OR receives the maximum number of strikes, the game should end and give the player the option to play again.

10. If the player chooses to play again, the game should restart, clearing all previous points, strikes, or used passes. The restart should be accomplished without a page refresh.

## Game Play - IMPORTANT

11. When the game begins, the player will be presented with a word that has been scrambled. The player will guess by typing into the provided textbox.

12. If the guess is correct, the player will earn a point, and a new scrambled word will appear. If the guess is incorrect, the player will receive a strike, and the scrambled word will remain.

13. A pass button will allow the player to skip a word and receive a new scrambled word. The player will only have a limited number of passes.

14. Each time a word is guessed correctly or is passed, the word is removed from the game list and will not appear again during that specific game.

15. The game is over when the player goes through all of the words in the game list OR the player has received the maximum number of strikes. At this time, the player should be presented with an option to play again.

This file version has allowed me to actually test the file as on my other file I cannot preview the file, over the course of a couple days I have deleted 3 repos, and restarted twice and I have only seen my file once or twice randomly each time.

This current version being submitted has this folder which contains a file version I can view and it is inside the INDEX with babel. 

The other version has it all in app.js but I cannot get it to view, it does not matter whether I add more files/different ways of compiling/using (like dist, src - package.json and more to import and compile, nothing works.).
The view randomly shows up - on this submission, I have seen it once in the last 10 hours. The only way I have been able to view my work has been through this submission consistently.
*/