<template>
  <div class="app">
    <h1 class="app__main-title">Саймон говорит</h1>
    <div class="app__game">
      <button class="app__btn app__btn_color_blue" />
      <button class="app__btn app__btn_color_red" />
      <button class="app__btn app__btn_color_yellow" />
      <button class="app__btn app__btn_color_green" />
    </div>
    <div class="app__menu">
      <div>
        <h2>Раунд 0</h2>
        <button class="app__start">Старт</button>
        <p>Извини, ты проиграл после 30 раундов</p>
      </div>
      <div>
        <h2>Уровень сложности</h2>
        <div>
          <input type="radio" name="complexity" />
          <span>Легкий</span>
        </div>
        <div>
          <input type="radio" name="complexity" />
          <span>Средний</span>
        </div>
        <div>
          <input type="radio" name="complexity" />
          <span>Сложный</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./App.css";
</style>
