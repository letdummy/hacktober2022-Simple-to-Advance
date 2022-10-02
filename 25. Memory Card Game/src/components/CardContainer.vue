<template>
  <ScoreBar
    :min="totalTime.minutes"
    :sec="totalTime.seconds"
    :turns="turns"
    :finish="finish"
  />
  <div class="memoryGame">
    <CardItem
      v-for="(img, index) in memoryCards"
      :key="index"
      :img="img"
      :flipCard="flipCard"
    />
  </div>
</template>
<script>
import CardItem from "./CardItem.vue";
import ScoreBar from "./ScoreBoard.vue";
import { InitialGame } from "../../utils/game";
export default {
  props: ["gameFinish", "startGame", "restartGame"],
  components: {
    CardItem,
    ScoreBar,
  },

  data() {
    return {
      cards: [
        {
          url: [require("@/assets/angular.svg")],
          name: "Angular",
          isFlipped: false,
          isMatched: false,
        },
        {
          url: [require("@/assets/aurelia.svg")],
          name: "Aurelia",
          isFlipped: false,
          isMatched: false,
        },
        {
          url: [require("@/assets/backbone.svg")],
          name: "Backbone",
          isFlipped: false,
          isMatched: false,
        },
        {
          url: [require("@/assets/ember.svg")],
          name: "Ember",
          isFlipped: false,
          isMatched: false,
        },
        {
          url: [require("@/assets/react.svg")],
          name: "React",
          isFlipped: false,
          isMatched: false,
        },
        {
          url: [require("@/assets/vue.svg")],
          name: "Vue",
          isFlipped: false,
          isMatched: false,
        },
      ],
      memoryCards: [],
      flippedCards: [],
      finish: false,
      start: this.startGame,
      restart: this.restartGame,
      turns: 0,
      totalTime: {
        minutes: 0,
        seconds: 0,
      },
    };
  },
  created() {
    this.memoryCards = InitialGame(this.memoryCards);
  },
  watch: {
    restartGame(val) {
      // watch if restart game value is change to true
      if (val) {
        this._restartGame();
      }
    }
  },
  methods: {
    flipCard(card) {
      if (card.isMatched || card.isFlipped || this.flippedCards.length === 2)
        return;
      if (!this.start) {
        this._startGame();
      }
      card.isFlipped = true;
      if (this.flippedCards.length < 2) this.flippedCards.push(card);
      if (this.flippedCards.length === 2) this._match(card);
    },
    _match() {
      this.turns++;
      if (this.flippedCards[0].name === this.flippedCards[1].name) {
        setTimeout(() => {
          this.flippedCards.forEach((card) => (card.isMatched = true));
          this.flippedCards = [];

          //All cards matched ?

          if (this.memoryCards.every((card) => card.isMatched === true)) {
            this.setPoint(this.interval);
            clearInterval(this.interval);
            this.finish = true;
            this.gameFinish(this.finish);
          }
        }, 400);
      } else {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {
            card.isFlipped = false;
          });
          this.flippedCards = [];
        }, 800);
      }
    },
    _startGame() {
      this._tick();
      this.interval = setInterval(this._tick, 1000);
      this.start = true;
    },
    _tick() {
      if (this.totalTime.seconds !== 59) {
        this.totalTime.seconds++;
        return;
      }

      this.totalTime.minutes++;
      this.totalTime.seconds = 0;
    },
    _restartGame() {
      // reset data
      Object.assign(this.$data, this.$options.data.apply(this));
      // reshuffle cards
      this.memoryCards = InitialGame(this.memoryCards);
      // start new game
      this._startGame();
    },
  },
  computed: {
    sec() {
      if (this.totalTime.seconds < 10) {
        return "0" + this.totalTime.seconds;
      }
      return this.totalTime.seconds;
    },
    min() {
      if (this.totalTime.minutes < 10) {
        return "0" + this.totalTime.minutes;
      }
      return this.totalTime.minutes;
    },
  },

  inject: ["setPoint"],
  name: "cardContainer",
};
</script>
<style>
.memoryGame {
  width: 640px;
  height: 640px;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
}
</style>
