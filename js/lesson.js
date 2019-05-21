let mainIndex = 0;
startLesson();
function startLesson() {
  let mainSections = document.querySelectorAll(".main-section");
  if (mainIndex === mainSections.length) {
    mainIndex = 0;
  }
  mainSections.forEach(section => {
    section.style.display = "none";
    mainSections[mainIndex].style.display = "block";
  });
  mainIndex++;
  showSection("section", 0);
  showSection("beginner-lesson", 0);
  showSection("intermediate-lesson", 0);
  showSection("advanced-lesson", 0);
  showSection("about-lesson", 0);
}

let startButton = document.querySelector("#start-button");
let masthead = document.querySelector(".masthead");
startButton.addEventListener("click", startLesson);
masthead.addEventListener("click", startLesson);

function showSection(sectionClass, sectionIndex = 0) {
  let sections = document.querySelectorAll("." + sectionClass);
  sections.forEach(section => {
    section.style.display = "none";
  });
  sections[sectionIndex].style.display = "block";
}

//Define the model class as a functional class; a blueprint for the lessons in this site
//LESSON is the core object of this app. All major activities of learning are organized around different learning modules. We will learning game functionality with scores later.
function Lesson(title, nepali, english, sound, picture) {
  this.title = title; //string
  this.nepali = nepali; //array of strings
  this.english = english; //array of strings
  this.sound = sound; //array of strings
  this.picture = picture; //array of strings
  this.itemIndex = 0;

  this.getTitle = function(id) {
    let lessonTitleContainer = document.getElementById(id);
    let lessonTitle = `
    <h3>${this.title}</h3>
    `;
    lessonTitleContainer.innerHTML = lessonTitle;
    return lessonTitleContainer;
  };
  this.getItem = function(id) {
    let itemList = document.getElementById(id);
    let item = ` 
     <div class="nepali">${this.nepali[this.itemIndex]}</div>
     <div class="english">${this.english[this.itemIndex]}</div>
     <div class="picture">${this.picture[this.itemIndex]}</div>
     <div class="sound">${this.sound[this.itemIndex]}</div>
      `;
    itemList.innerHTML = item;
  };

  this.getNextItem = function(id) {
    this.itemIndex++;

    if (this.itemIndex === this.nepali.length) {
      this.itemIndex = 0;
    }
    this.getItem((id = id));
  };

  this.getPreviousItem = function(id) {
    this.itemIndex--;
    if (this.itemIndex < 0) {
      this.itemIndex = this.nepali.length - 1;
    }
    this.getItem((id = id));
  };
}

//Beginner Content
let vowelLesson = new Lesson(
  "Vowels (अ, आ, इ, ई...) ",
  ["अ", "आ", "इ", "ई"],
  ["a", "aa", "i", "ee"],
  ["a.mp3", "aa.mp3", "i.mp3", "ee.mp3"],
  ["a.png", "aa.png", "i.png", "ee.png"]
);
let rootLesson = new Lesson(
  "Roots( क, ख, ग, घ ...) ",
  ["क", "ख", "ग"],
  ["ka", "kha", "ga"],
  ["ka.mp3", "kha.mp3", "ga"],
  ["ka.png", "kha.mp3", "ga.mp3"]
);
let compositeLesson = new Lesson(
  "Composites (क, का, कि, की ...)",
  ["क", "का", "कि"],
  ["ka", "kaa", "ki"],
  ["ka.mp3", "kaa.mp3", "ki.mp3"],
  ["ka.png", "kaa.png", "ki.png"]
);

//Intermediate Content
let nounLesson = new Lesson(
  "Nouns",
  ["म", "हामी", "तपाई", "तिमी", "उ", "उनिहरू"],
  ["I", "We", "You", "You", "He", "They"],
  ["i.mp3", "we.mp3", "you.mp3", "you.mp3", "he.mp3", "they.mp3"],
  ["i.png", "we.png", "you.png", "you.png", "he.png", "they.png"]
);
let verbLesson = new Lesson(
  "Verbs",
  ["सुत्नु", "उठ्नु", "खानु", "पिउनु", "हिड्नु"],
  ["To Sleep", "To Wake Up", "To Eat", "To Drink", "To Walk"],
  ["sleep.mp3", "wake.mp3", "eat.mp3", "drink.mp3", "walk.mp3"],
  ["sleep.png", "wake.png", "eat.png", "drink.png", "walk.png"]
);
let adjectiveLesson = new Lesson(
  "Adjectives",
  ["रातो", "सानो", "ठूलो", "लामो", "छोटो"],
  ["red", "small", "big", "long", "short"],
  ["red.mp3", "small.mp3", "big.mp3", "long.mp3", "short.mp3"],
  ["red.png", "small.png", "big.png", "long.png", "short.png"]
);

//Advanced Content

let presentLesson = new Lesson(
  "Present Sentences",
  [
    "म अनिल हो ।",
    "तपाई पूरुष हो।",
    "उनी महिला हुन ।",
    "उ केटी हो ।",
    "उ केटा हो ।"
  ],
  [
    "I am Anil.",
    "You are a man.",
    "She is a woman",
    "She is a girl.",
    "He is a boy."
  ],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "]
);

let pastLesson = new Lesson(
  "Past Sentences",
  [
    "म घर गएँ ।",
    "मैले खाना खाएँ",
    "हामी घर गयौँ ।",
    "तिमिहरू घर गयौ ।",
    "उ घर गयो ।",
    "उनी घर गइन् ।"
  ],
  [
    "I went home.",
    "I ate food.",
    "We went home.",
    "You (plural) went home.",
    "He went home.",
    "She went home."
  ],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""]
);

let futureLesson = new Lesson(
  "Future Sentences",
  [
    "म घर जानेछु ।",
    "हामी गर जानेछौँ ।",
    "तिमी घर जानेछौ ।",
    "तिमिहरू घर जानेछौ ।",
    "उ घर जानेछ ।",
    "उनी घर जानेछिन् ।",
    "उनिहरू घर जानेछन् ।"
  ],
  [
    "I will go home.",
    "We will go home.",
    "You (singular) will go home.",
    "You (plural) will go home.",
    "He will go home.",
    "She will go home.",
    "They will go home."
  ],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""]
);

//Beginner Lessons
vowelLesson.getTitle("vowel-lesson-title");
vowelLesson.getItem("vowel-list");

rootLesson.getTitle("root-lesson-title");
rootLesson.getItem("root-list");

compositeLesson.getTitle("composite-lesson-title");
compositeLesson.getItem("composite-list");

//Intermediate Lessons
nounLesson.getTitle("noun-lesson-title");
nounLesson.getItem("noun-list");

verbLesson.getTitle("verb-lesson-title");
verbLesson.getItem("verb-list");

adjectiveLesson.getTitle("adjective-lesson-title");
adjectiveLesson.getItem("adjective-list");

//Advanced Lessons
presentLesson.getTitle("present-lesson-title");
presentLesson.getItem("present-list");

pastLesson.getTitle("past-lesson-title");
pastLesson.getItem("past-list");

futureLesson.getTitle("future-lesson-title");
futureLesson.getItem("future-list");
