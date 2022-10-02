<template>
  <div
    :key="img"
    class="memory-card"
    :class="`${img.isFlipped ? 'flip' : ''} ${img.isMatched ? 'matched' : ''}`"
    @click="flipCard(img)"
    :data-framework="img.name"
  >
    <img :src="img.url" :alt="img.name" class="front-face" />
    <img src="@/assets/js-badge.svg" alt="JS badge" class="back-face" />
  </div>
</template>
<script>
export default {
  props: ["img", "flipCard"],
  name: "cardItem",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.memory-card {
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  position: relative;
  margin: 5px;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.memory-card.flip {
  transform: rotateY(180deg);
}
.memory-card:active {
  transform: scale(0.97);
  transition: transform 0.2s;
}
.back-face,
.front-face {
  padding: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);

  backface-visibility: hidden;
}
.front-face {
  transform: rotateY(180deg);
}
</style>
