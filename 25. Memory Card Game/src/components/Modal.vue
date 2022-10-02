<template>
  <transition name="modal">
    <div class="modal-mask" v-show="this.showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <form>
              <div class="group">
                <input type="text" required v-model="name" />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
              </div>
            </form>
            <button class="modal-default-button" @click="setPlayer(name)">
              <img src="../assets/arrow.svg" alt="arrow" class="black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      showModal: true,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
  },
  inject: ["setPlayer"],
};
</script>
<style>
button {
  cursor: pointer;
  background-color: #e3f6f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  padding: 10px 6px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
}
button img {
  fill: #272643;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  width: 30px;
  height: 30px;
}
.black {
  filter: invert(13%) sepia(51%) saturate(608%) hue-rotate(203deg)
    brightness(88%) contrast(92%);
}
.container {
  font-family: "Roboto";
  width: 600px;
  margin: 30px auto 0;
  display: block;
  background: #fff;
  padding: 10px 50px 50px;
}

.group {
  position: relative;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 350px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 350px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
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

.modal-container {
  width: 526px;
  height: 140px;
  margin: 0px auto;

  padding: 20px 30px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #000;
}

.modal-body {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-footer {
  margin-top: 10px;
  text-align: center;
}
.modal-footer a {
  text-decoration: none;
}
.modal-footer small {
  color: #272643;
}
</style>
