# Spelling Bee Training Tool

My elementary school daughter recently came home after competing in her schools spelling bee. In the excitement of the moment of having faired so much better than last year she said "next year I want to win!"

That inspired me to see if I could design a tool to help her prepare. 

This app makes use of React-Speech-Kit in combination with a speech recognition polyfill to help it function on most modern browsers, desktop computers, Android and IOS devices.

### At the moment the app includes: 
---

* Grade level based study mode
* Grade level based Spelling Bee mode with voice recognition
* Admin mode to add/update words, definitions and grade levels
* "Lexend" font to help remove cognitive noise in character recognition
* Visual and audio aid in study mode
* Use of default speech synthesis
* Use of Speech recognition
* Parent/Teacher/Student roles
* Parent and Teachers can create Student/Child Profiles
* Parent and Teachers can create QrCode cards for student/children
* QrCode Login to help students/children login without adult assistance
* Parents/Teachers can see students progress in an overview
* All users can see spelling results in profile view

### Current challenges: 
---
* Speech Synthesis operates differently on different devices (to include different speeds) which creates a challenge synchronizing the flash cards in study mode as well as the timeOut's needed to turn off the mic while the computer is speaking.
* QrCode login works when running the frontend on a local server. When deployed to Netlify it causes an error.
* Layout of elements is not ideal

# Try it here!

## [Spelling Bee Practice App online!](https://spelling-bee-practice-app.netlify.app/)

## Screenshots

### Full screen browser view
![Imgur](https://i.imgur.com/VlUdP4Fl.png)
### Landscape Mobile view
![Imgur](https://i.imgur.com/hldxRJBm.png)
![Imgur](https://i.imgur.com/n8XjcRrm.png)
![Imgur](https://i.imgur.com/DysIUkqm.png)
![Imgur](https://i.imgur.com/HIMNHVZm.png)
### Portrait Mobile View
![Imgur](https://i.imgur.com/VnVifIam.png)



### See my first planning on Trello:
[Public Trello Board](https://trello.com/b/TF8kdi5t/spelling-bee-practice-app)

### Original Wireframes from early planning: 
[Wireframes on whimsical](https://whimsical.com/spelling-bee-practice-app-HntJW19T2RJ984NK5yvMFS)

## Current plan and goal:
* ability to reveal the word after trying to spell it first
* enlarge vocabulary to practice as student progresses
* setting for practicing 'older' already learned words for review
* setting for learning just new words

## Next steps:
* grade level appropriate word lists to practice
* word definitions in style of spelling bee

## Completed steps:
* create wireframe
* create data models
* determine MVP goal
* have app speak words to student
* study mode
* spelling bee mode
* admin panel to add words
* have app listen (and recognise) spelling
* graphical display of progress
* create way of tracking how well a word has been learned
* teacher/parent/child roles
* qr-code generation
* qr-code login


# Interested in helping? Reach out!
you can contact me at: jan-horak@gmx.de

or connect with me on Linked.in: https://www.linkedin.com/in/jan-horak/

# Resources

Bee Favicon from : https://favicon.io/emoji-favicons/honeybee/

Dyslexic friendly font: Lexend https://fonts.google.com/specimen/Lexend?query=Lexend
for more information on this open source font project please go to: https://www.lexend.com/

I struggled to figure out how to animate the letters on the flashcard in study mode. I thought it would be a great bonus if the letters would be emphasized as they are spelled my the computer. I found these helpful links from Sarah L. Fossheim. I adapted them to make it work for the study mode: <br/>
https://fossheim.io/writing/posts/react-text-splitting/ <br/>
https://fossheim.io/writing/posts/react-text-splitting-animations/ 

Grade level words were found through google searches for Scripps Spelling Bee word lists all over the internet.

Word definitions have been pulled in using the [WordsAPI](https://www.wordsapi.com/) in the Admin wordsearch function. I have free usage with a 500 word a day limit.

Speech recognition is implemented using [react-speech-recognition](https://github.com/JamesBrill/react-speech-recognition) in combination with a [speech recognition polyfill](https://github.com/JamesBrill/react-speech-recognition/blob/master/docs/POLYFILLS.md) usinging [Speechly's](https://www.speechly.com/) free tier.

The voice selection option in the profile view is adapted from the react-speech-kit [Github repository from MikeyParten](https://github.com/MikeyParton/react-speech-kit/blob/master/examples/src/useSpeechRecognition.jsx) 

[React-qr-code](https://www.npmjs.com/package/react-qr-code) and [react-qr-reader](https://www.npmjs.com/package/react-qr-reader) NPM libraries were used to assist in the qr-code generation and login.

I use [crypto-js](https://www.npmjs.com/package/crypto-js) to encrypt and decrypt the user login information for the Qr code. 

Avatars: 
All individually downloaded for free from flaticon. The entire pack can be found at: [Icon Pack: Animals | Flat](https://www.flaticon.com/packs/animals-3)
* <a href="https://www.flaticon.com/free-icons/octopus" title="octopus icons">Octopus icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/parrot" title="parrot icons">Parrot icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/crow" title="crow icons">Crow icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/buffalo" title="buffalo icons">Buffalo icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/donkey" title="donkey icons">Donkey icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/elephant" title="elephant icons">Elephant icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/snake" title="snake icons">Snake icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/seagull" title="seagull icons">Seagull icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/penguin" title="penguin icons">Penguin icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/bear" title="bear icons">Bear icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/panda" title="panda icons">Panda icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/pig" title="pig icons">Pig icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/cow" title="cow icons">Cow icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/racoon" title="racoon icons">Racoon icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/polar-bear" title="polar bear icons">Polar bear icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/leopard" title="leopard icons">Leopard icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/owl" title="owl icons">Owl icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/cock" title="cock icons">Cock icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/buffalo" title="buffalo icons">Buffalo icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/whale" title="whale icons">Whale icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/octopus" title="octopus icons">Octopus icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/anteater" title="anteater icons">Anteater icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/chicken" title="chicken icons">Chicken icons created by Freepik - Flaticon</a>

# Deployment links:

[Front end on Netlify](https://spelling-bee-practice-app.netlify.app/)

[Back end on Heroku](https://spelling-bee-practice-app.herokuapp.com/)