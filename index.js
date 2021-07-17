// //import { Howler, Howl } from "howler";

//const { Howl } = require("howler");

// var soundTest = new Howl({
//   src: ["/audio/hihat-acoustic01.wav"],
// });

// const test = document.querySelector(".test");

// test.addEventListener("click", () => {
//   console.log("clicked");
//   soundTest.play();
// });

const root = document.querySelector("#root");

document.addEventListener("keydown", (e) => {
  //   switch (e.key) {
  //     case "q":
  //       console.log(`${e.key} key pressed, play hihat`);
  //       soundsArr[0].soundFile.play();
  //       break;
  //     case "w":
  //       console.log(`${e.key} key pressed, play hihat`);
  //       soundsArr[1].soundFile.play();
  //       break;
  //   }

  const pressedPad = soundsArr.filter((item) => item.keyPress === e.key)[0];
  console.log(pressedPad);
  pressedPad.soundFile.play();
});

const soundsArr = [
  {
    name: "hihat",
    soundFile: new Howl({
      src: ["/audio/hihat-acoustic01.wav"],
    }),
    keyPress: "q",
  },
  {
    name: "kick",
    soundFile: new Howl({
      src: ["/audio/kick-newwave.wav"],
    }),
    keyPress: "w",
  },
  {
    name: "snare",
    soundFile: new Howl({
      src: ["/audio/snare-analog.wav"],
    }),
    keyPress: "e",
  },
  {
    name: "snare2",
    soundFile: new Howl({
      src: ["/audio/snare-modular.wav"],
    }),
    keyPress: "a",
  },
  {
    name: "openhat",
    soundFile: new Howl({
      src: ["/audio/openhat-tight.wav"],
    }),
    keyPress: "s",
  },
  {
    name: "clap",
    soundFile: new Howl({
      src: ["/audio/clap-808.wav"],
    }),
    keyPress: "d",
  },
  {
    name: "tom1",
    soundFile: new Howl({
      src: ["/audio/tom-fm.wav"],
    }),
    keyPress: "z",
  },
  {
    name: "tom1",
    soundFile: new Howl({
      src: ["/audio/tom-analog.wav"],
    }),
    keyPress: "x",
  },
  {
    name: "?",
    soundFile: new Howl({
      src: ["/audio/perc-tribal.wav"],
    }),
    keyPress: "c",
  },
];

const createButton = (data) => {
  const button = document.createElement("button");
  button.classList.add(data.name);
  button.textContent = data.name;

  //each time funtion is called creates a button
  return button;
};

//get html button elements
const buttons = soundsArr.map((item) => createButton(item));
//append to parent
buttons.forEach((button) => root.appendChild(button));
