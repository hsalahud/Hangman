let randomNumber
let preventRepetition
let chances = 5
let autoGenCiv
let civilizationsLength
let mLetters

let genLetterPosition
let letter
let correct
let parent
let child
let alreadyUsed = []
let wrongList = []
let correctList = []
let totalCorrect = 0

let indexOfSpace
let wins = 0
let resetParent
let iframe

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


//This function randomly selects a civilization and displays it in the HTMl with each letter represented with an underscore
const genCiv = () => {

    civilizationsLength = Object.keys(civilizations).length

    randomNumber = Math.floor(Math.random() * civilizationsLength)

    switch (randomNumber) {
        case 0:
        iframe = document.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/embed/cnMa-Sm9H4k'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
            break
        case 1:
        iframe = document.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/watch?v=Q6eBJjdca14'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        case 2:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/B8cO1pAHVok?start=12'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 3:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/k68CVL8LCXw'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 4:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/GY4tnSov_3E?start=27'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // // document.querySelector(".videos").appendChild(iframe);
        break
        case 5:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/GY4tnSov_3E?start=90'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 6:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/3yb1jBTwMeI?start=257'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 7:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/5fuzsgwFzuI?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 8:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/B8cO1pAHVok?start=13'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        case 9:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/HPRPaTqNnZk?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
        
        case 10:
        iframe = document.querySelector('iframe'); 
        iframe.src = 'https://www.youtube.com/embed/kfWJkO0nuhY'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break

        case 11:
        iframe = document.querySelector('iframe');

        iframe.src = 'https://www.youtube.com/embed/3yb1jBTwMeI?start=309'
        iframe.frameborder='0'
        iframe.allow =  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true;
        // document.querySelector(".videos").appendChild(iframe);
        break
    }



    autoGenCiv = civilizations[randomNumber]
    console.log(autoGenCiv)
    autoGenCiv = autoGenCiv.split("")

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
            // .innerHTML

        }
    }
}

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

const foo = () => {

    genCiv()


    // Whenever a key is pressed, log to the console the key pressed.
    document.onkeyup = e => {

        document.querySelector('#start').textContent = ``

        if (event.keyCode >= 65 && event.keyCode <= 90) {

            if (alreadyUsed.indexOf(e.key.toUpperCase()) === -1) {

                alreadyUsed.push(e.key.toUpperCase())
                console.log(alreadyUsed)

                if (chances > 0) {

                    if (autoGenCiv.indexOf(e.key.toUpperCase()) === -1) {
                        chances -= 1
                        document.querySelector('#guesses').textContent = `Guesses Remaining: ${chances}`
                        wrongList.push(` ${e.key.toUpperCase()}`)
                        document.querySelector('#used').textContent = `Already Used: ${wrongList}`
                        console.log(wrongList)
                    }

                    else {

                        mLetters = []
                        for (let i = 0; i <= autoGenCiv.length; i++) {
                            if (autoGenCiv[i] === e.key.toUpperCase()) {
                                mLetters.push(i)
                            }
                        }

                        if (mLetters.length === 1) {
                            genLetterPosition = autoGenCiv.indexOf(e.key.toUpperCase())

                            letter = autoGenCiv[autoGenCiv.indexOf(e.key.toUpperCase())]

                            document.getElementById(`letter${genLetterPosition}`).textContent = letter

                            totalCorrect += 1
                            console.log(totalCorrect)

                        }

                        else {
                            for (let j = 0; j < mLetters.length; j++) {

                                letter = autoGenCiv[autoGenCiv.indexOf(e.key.toUpperCase())]
                                document.getElementById(`letter${mLetters[j]}`).textContent = letter

                            }

                            totalCorrect += mLetters.length
                            console.log(totalCorrect)
                        }

                        if (totalCorrect === autoGenCiv.length) {

                            wins += 1
                            // var audio = new Audio('https://www.youtube.com/embed/TpA17Oy0nK8?start=1805');
                            // audio.play();
                            document.querySelector('#wins').textContent = `Wins: ${wins}`
                            reset()

                        }
                    }
                }

                else {
                    reset()

                }
            }

            else {
                console.log("Letter Already Used")
            }
        }

        else {
            console.log("wrong key")
        }
    }
}