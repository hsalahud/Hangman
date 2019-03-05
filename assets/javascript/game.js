
/////////----I HAVE CONSOLE LOGGED THE ANSWERS SO THAT YOU CAN TEST THE CODE WITHOUT STRUGGLING WITH THE WORDS------///////



//variables blocking repetition of letters and ensuring repetition does not affect number of chances
let preventRepetition
let chances = 5

//Variables needed to randomly select a civilizatio
//The civilization that is selected by the randomNumber
let autoGenCiv
let civilizationsLength
let randomNumber

//mLetters detects repeated letter in word
let mLetters

//The following variables are used to place the correct letter in their proper position
let genLetterPosition
let letter

//Need to determine this for two worded civilizations
let indexOfSpace

//Variables accounting for letters used
let alreadyUsed = []
let wrongList = []
let correctList = []
let totalCorrect = 0

//variables accounting for winning or losing. Both requiring to reset the parent list
let wins = 0
let resetParent

//iframe for youtube hint videos
let iframe

//list of words that will be used in hangman. I commented out half of them so in case I want to use them later on.
//variable set as an object so I can clearly see their position
const civilizations = {

    // 0: "Indus Valley".toUpperCase(),
    // 1: 'Greece'.toUpperCase(),
    // 2: 'Rome'.toUpperCase(),
    // 3: 'Mesopotamia'.toUpperCase(),
    // 4: 'Carthage'.toUpperCase(),
    // 5: 'Persia'.toUpperCase(),
    // 6: 'China'.toUpperCase(),
    0: 'Inca'.toUpperCase(),
    1: 'Maya'.toUpperCase(),
    // 2: 'Osirian'.toUpperCase(),
    2: 'Aztec'.toUpperCase(),
    3: 'Caral Supe'.toUpperCase(),
    4: 'Olmec'.toUpperCase(),
    5: 'Zapotec'.toUpperCase(),
    6: 'Nazca'.toUpperCase(),
    7: 'Tiwanaku'.toUpperCase(),
    8: 'Wari'.toUpperCase(),
    // 10: 'Mississippian'.toUpperCase(),
    9: 'Teotihuacan'.toUpperCase(),
    // 10: 'Canaris'.toUpperCase(),
    10: 'Chavin'.toUpperCase(),
    // 12: 'Chibchas'.toUpperCase(),
    //11: 'Norte Chico'.toUpperCase(),
    11: 'Moche'.toUpperCase(),
    // 24: 'Kush'.toUpperCase(),
    // 25: 'Punt'.toUpperCase(),
    // 26: 'Aksum'.toUpperCase(),
    // 27: 'Mali'.toUpperCase(),
    // 28: 'Songhai'.toUpperCase(),
    // 29: 'Babylonia'.toUpperCase(),
    // 30: 'Egypt'.toUpperCase()

}


//This function randomly selects a civilization and displays it in the HTMl with each letter represented with an underscore.
const genCiv = () => {

    civilizationsLength = Object.keys(civilizations).length

    randomNumber = Math.floor(Math.random() * civilizationsLength)

    //Each word has it's own hint youtube video
    switch (randomNumber) {
        case 0:
        iframe = document.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/embed/cnMa-Sm9H4k'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 1:
        iframe = document.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/watch?v=Q6eBJjdca14'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        case 2:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/B8cO1pAHVok?start=12'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 3:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/k68CVL8LCXw'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 4:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/GY4tnSov_3E?start=27'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        
        break
        case 5:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/GY4tnSov_3E?start=90'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 6:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/3yb1jBTwMeI?start=257'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 7:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/5fuzsgwFzuI?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 8:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/B8cO1pAHVok?start=13'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        case 9:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/HPRPaTqNnZk?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
        
        case 10:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/kfWJkO0nuhY'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break

        case 11:
        iframe = document.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/embed/3yb1jBTwMeI?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        break
    }


    //selecting a civilization
    autoGenCiv = civilizations[randomNumber]
    console.log(autoGenCiv)
    autoGenCiv = autoGenCiv.split("")

    //displaying each letter of the civilization with an underscore and accounting for spaces.
    if (autoGenCiv.indexOf(" ") !== -1) {
        indexOfSpace = autoGenCiv.indexOf(" ")
        autoGenCiv.splice(indexOfSpace, 1)

        for (let i = 0; i < autoGenCiv.length; i++) {
            item = document.createElement('li');
            document.querySelector('ul').append(item)
            item.setAttribute('id', `letter${i}`)
            document.getElementById(`letter${i}`).textContent = "_";
        }

        document.getElementById(`letter${indexOfSpace - 1}`).style.marginRight = "40px";

    }

    else {
        for (let i = 0; i < autoGenCiv.length; i++) {

            item = document.createElement('li');
            document.querySelector('ul').append(item)
            item.setAttribute('id', `letter${i}`)
            document.getElementById(`letter${i}`).textContent = "_";

        }
    }
}

//Resets the list by deleting each child of the ul. Everything defaults except the total number of wins
const reset = () => {
    resetParent = document.querySelector("#myList")
    wrongList = []
    document.querySelector('#used').textContent = `Already Used: ${wrongList}`
    chances = 5
    document.querySelector('#guesses').textContent = `Guesses Remaining: 5`
    alreadyUsed = []
    totalCorrect = 0

    while (resetParent.firstChild) {
        resetParent.removeChild(resetParent.firstChild)
    }
    genCiv()
}


//This function runs our entire hangman game
const runGame = () => {

    //Begin by generating a random civilization
    genCiv()

    // Whenever a key is pressed, log to the console the key pressed.
    document.onkeyup = e => {

        //Remove text stating that you must click any key to play
        document.querySelector('#start').textContent = ``

        //Restricting which keys could be used
        if (event.keyCode >= 65 && event.keyCode <= 90) {

            //Looking at whether the key pressed is in the array of letters that are already pressed. If not, continue
            if (alreadyUsed.indexOf(e.key.toUpperCase()) === -1) {

                //add the letter I just pressed to the array of already used letters
                alreadyUsed.push(e.key.toUpperCase())
                
                //check if chances are greater than 0, if so continue
                if (chances > 0) {

                    //check if the letter pressed belongs to the random civilization selected, if not, do the below
                    if (autoGenCiv.indexOf(e.key.toUpperCase()) === -1) {
                        //chances go down by one and it is reflected in the html
                        chances -= 1
                        document.querySelector('#guesses').textContent = `Guesses Remaining: ${chances}`
                        //wrong letter registered and shown in the HTML
                        wrongList.push(` ${e.key.toUpperCase()}`)
                        document.querySelector('#used').textContent = `Already Used: ${wrongList}`
                    }

                    //If the letter is part of the word, we do the following
                    else {

                        //set array of repeting letters to empty then add all instances of the letter pressed to that array.
                        mLetters = []
                        for (let i = 0; i <= autoGenCiv.length; i++) {
                            if (autoGenCiv[i] === e.key.toUpperCase()) {
                                mLetters.push(i)
                            }
                        }

                        //if the length of mletters is 1 that means the letter I entered is not repeated, so we do the following
                        if (mLetters.length === 1) {
                            //find the postion of that letter in the word and reveal it in the HTML in its correct position
                            genLetterPosition = autoGenCiv.indexOf(e.key.toUpperCase())
                            letter = autoGenCiv[autoGenCiv.indexOf(e.key.toUpperCase())]
                            document.getElementById(`letter${genLetterPosition}`).textContent = letter
                            //add one to the total number of correct letters
                            totalCorrect += 1
                        }

                        //if the length of mletters is greater than one, that means the letter we entered is repeated in the word
                        else {
                            //We then find each position of that letter and display it in its correct position in the HTML
                            for (let j = 0; j < mLetters.length; j++) {
                                letter = autoGenCiv[autoGenCiv.indexOf(e.key.toUpperCase())]
                                document.getElementById(`letter${mLetters[j]}`).textContent = letter
                            }

                            //We add the total number of the repeated letter to total number of correctly guessed letters
                            totalCorrect += mLetters.length
                        }

                        //total correct can only be a max of the length of our word. If the two are equal, we then guessed the word correctly
                        if (totalCorrect === autoGenCiv.length) {
                            //add one to our wins and display it in the HTML
                            wins += 1
                            document.querySelector('#wins').textContent = `Wins: ${wins}`
                            //We then reset the game
                            reset()

                        }
                    }
                }
                //we reset the game if chances go below 0
                else {
                    reset()

                }
            }
            //If you click on a letter you already used, you get this message
            else {
                console.log("Letter Already Used")
            }
        }
        //If you click on anything other than a letter, you get this message in the console
        else {
            console.log("wrong key")
        }
    }
}