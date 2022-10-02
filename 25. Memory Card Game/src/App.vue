<template>
  <Title />
  <CardContainer :gameFinish="gameFinish" :startGame="start" :restartGame="restartGame" />
  <Modal ref="Modal" />
  <DashBoard :showResult="showResult" />
</template>

<script>
import Title from "./components/Title.vue";
import CardContainer from "./components/CardContainer.vue";
import Modal from "./components/Modal.vue";
import DashBoard from "./components/DashBoard.vue";

export default {
  name: "App",
  data() {
    return {
      players: [
        {
          name: null,
          score: null,
        },
      ],
      showResult: false,
      start: false,
      restartGame: false
    };
  },
  methods: {
    setPlayer(name) {
      this.players[0].name = name;
      this.$refs.Modal.closeModal();
    },
    setPoint(point) {
      this.players[0].score = point;
      // this.$refs.Modal.openModal();
    },
    gameFinish(result) {
      this.restartGame = false;
      this.showResult = result;
    },
    gameRestart() {
      // reset point result and play again
      this.players[0].score = 0;
      this.showResult = false;
      this.restartGame = true;
    }
  },
  components: {
    Title,
    CardContainer,
    Modal,
    DashBoard,
  },

  provide() {
    return {
      players: this.players,
      setPlayer: this.setPlayer,
      setPoint: this.setPoint,
      gameRestart: this.gameRestart
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
}
</style>
