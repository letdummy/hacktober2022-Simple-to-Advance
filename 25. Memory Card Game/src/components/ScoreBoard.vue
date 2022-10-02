<template>
  <div id="scoreboard" class="">
    <div class="score">
      <p>Turns</p>
      <span class="actualscore">
        <span class="badge"> {{ turns }}</span>
      </span>
    </div>
    <div class="score">
      <p>Total Time</p>
      <span class="">
        <span class="badge">{{ min }} : {{ sec }}</span></span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["min", "sec", "turns", "finish"],
};
</script>
<style>
#scoreboard {
  display: flex;
  width: 20vw;
  margin: 15px auto;
}

#scoreboard::after {
  content: "";
  display: block;
  clear: both;
}

.score {
  float: left;
  width: 33vw;
  height: 40px;
  background-color: #eee4da;
  color: #776e65;
  text-align: center;
  border-radius: 5px;
}

.score:last-of-type {
  margin-left: 4vw;
}
</style>
