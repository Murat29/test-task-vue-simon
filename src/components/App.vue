<template>
  <div class="app">
    <h1 class="app__main-title">Саймон говорит</h1>
    <fieldset :disabled="isButtonsDisabled" class="app__game">
      <button
        @click="checkButton(1)"
        :class="{
          app__btn: true,
          app__btn_color_blue: true,
          app__btn_active: activeBtn === 1,
        }"
      />
      <button
        @click="checkButton(2)"
        :class="{
          app__btn: true,
          app__btn_color_red: true,
          app__btn_active: activeBtn === 2,
        }"
      />
      <button
        @click="checkButton(3)"
        :class="{
          app__btn: true,
          app__btn_color_yellow: true,
          app__btn_active: activeBtn === 3,
        }"
      />
      <button
        @click="checkButton(4)"
        :class="{
          app__btn: true,
          app__btn_color_green: true,
          app__btn_active: activeBtn === 4,
        }"
      />
    </fieldset>
    <div class="app__menu">
      <div>
        <h2>Раунд {{ sequenceOfButtons.length }}</h2>
        <button @click="start" class="app__start">Старт</button>
        <p v-show="isLose">
          Извини, ты проиграл(а) после {{ sequenceOfButtons.length }} раундов
        </p>
      </div>
      <div>
        <h2>Уровень сложности</h2>
        <div>
          <input
            v-model="currentLevel"
            value="easy"
            type="radio"
            name="complexity"
            checked
          />
          <span>Легкий</span>
        </div>
        <div>
          <input
            v-model="currentLevel"
            value="middle"
            type="radio"
            name="complexity"
          />
          <span>Средний</span>
        </div>
        <div>
          <input
            v-model="currentLevel"
            value="complicated"
            type="radio"
            name="complexity"
          />
          <span>Сложный</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const blueSound = new Audio(require("../sounds/sounds_1.mp3"));
const redSound = new Audio(require("../sounds/sounds_2.mp3"));
const yellowSound = new Audio(require("../sounds/sounds_3.mp3"));
const greenSound = new Audio(require("../sounds/sounds_4.mp3"));

export default {
  name: "App",
  data() {
    return {
      sequenceOfButtons: [],
      currentLevel: "easy",
      activeBtn: 0,
      checkedButton: 0,
      isLose: false,
      isButtonsDisabled: true,
      milliseconds: {
        easy: 1500,
        middle: 1000,
        complicated: 400,
      },
      sounds: {
        1: blueSound,
        2: redSound,
        3: yellowSound,
        4: greenSound,
      },
    };
  },
  methods: {
    start() {
      this.isLose = false;
      this.sequenceOfButtons = [];
      this.goToNextRound();
    },
    goToNextRound() {
      this.checkedButton = 0;
      this.sequenceOfButtons.push(this.getRandomNumber());
      const i = 0;
      this.playTheWholeSequence(i);
    },
    playTheWholeSequence(i) {
      if (i < this.sequenceOfButtons.length) {
        setTimeout(() => {
          const currentBtn = this.sequenceOfButtons[i];
          this.activeBtn = currentBtn;
          this.sounds[currentBtn].play();
          i++;
          setTimeout(() => {
            this.activeBtn = 0;
            this.sounds[currentBtn].pause();
            this.sounds[currentBtn].currentTime = 0;
          }, this.milliseconds[this.currentLevel] * 0.8);
          this.playTheWholeSequence(i);
        }, this.milliseconds[this.currentLevel]);
      } else {
        this.isButtonsDisabled = false;
      }
    },
    checkButton(value) {
      const currentBtn = this.sequenceOfButtons[this.checkedButton];
      this.activeBtn = currentBtn;
      this.sounds[currentBtn].play();

      setTimeout(() => {
        this.activeBtn = 0;
        this.sounds[currentBtn].pause();
        this.sounds[currentBtn].currentTime = 0;
      }, this.milliseconds[this.currentLevel] * 0.8);

      if (this.sequenceOfButtons[this.checkedButton] === value) {
        this.checkedButton++;
        if (this.checkedButton === this.sequenceOfButtons.length) {
          console.log("Тест");
          this.isButtonsDisabled = true;
          // Если не будет задержки, то следующий раунд начнется сликом быстро
          setTimeout(() => this.goToNextRound(), 1000);
        }
      } else {
        this.isLose = true;
        this.isButtonsDisabled = true;
      }
    },
    getRandomNumber() {
      return Math.floor(1 + Math.random() * 4);
    },
  },
};
</script>

<style>
@import "./App.css";
</style>
