<template>
  <div class="modal-mask" v-if="this.showResult">
    <div class="modal-wrapper">
      <div class="container">
        <div class="bg-circles">
          <div id="circle-1"></div>
          <div id="circle-2"></div>
          <div id="circle-3"></div>
        </div>
        <h1 id="title">Congratulations! {{ this.players[0].name }}</h1>
        <p class="conf-text">
          Thank you for your interest in this game. Your score is <br />
          {{ this.players[0].score }}
        </p>
        <button id="btn-continue" @click="gameRestart()">Play Again</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeaderBoard",
  inject: ["players", "gameRestart"],
  props: ["showResult"],
};
</script>
<style  scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030710;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.container {
  width: 340px;
  height: 420px;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: #f8f9fd;
}

.bg-circles div {
  aspect-ratio: 1/1;
  background-color: rgb(54, 89, 255);
  border-radius: 50%;
  position: absolute;
}

#circle-1 {
  width: 70%;
  left: -20%;
  top: -35%;
  opacity: 0.5;
}

#circle-2 {
  width: 120%;
  left: -20%;
  top: -80%;
  opacity: 0.4;
}

#circle-3 {
  width: 120%;
  left: 20%;
  top: -80%;
  opacity: 0.4;
}

#title {
  margin-top: 35%;
  text-align: center;
  font-size: 1.6rem;
  color: #1b1b1b;
  animation: breathing 3s linear infinite;
}
@keyframes breathing {
  0%,
  100% {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(1);
    transform: scale(0.95);
  }
  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
  75% {
    -webkit-transform: scale(1);
    -ms-transform: scale(0.95);
    transform: scale(1);
  }
}

.conf-text {
  margin-top: 1.5rem;
  line-height: 130%;
  text-align: center;
  color: #606060;
}

#btn-continue {
  width: 100%;
  height: 2.5rem;
  margin-top: 3rem;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: 0.5s;
  background-color: rgb(54, 89, 255);
  box-shadow: 0 5px 20px rgba(54, 89, 255, 0.25);
}

#btn-continue:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
</style>

