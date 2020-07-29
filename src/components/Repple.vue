<template>
  <div ref="container" @mousedown="addRipple" class="ripple-outer">
    <transition-group class="ripples" name="grow" tag="div">
      <div
        class="ripple"
        v-for="ripple in ripples"
        :key="ripple.id"
        :style="{
          top: ripple.top,
          left: ripple.left,
          width: ripple.width,
          height: ripple.height,
          background: color,
        }"
      ></div>
    </transition-group>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ripples: [],
    };
  },
  props: {
    title: {
      type: String,
    },
    color: {
      type: String,
      default: "rgba(237, 199, 28, 0.5)",
    },
  },
  mounted() {
    const width = this.$refs.container.offsetWidth;
    const height = this.$refs.container.offsetHeight;
    this.rippleEffWidth = width > height ? width : height;
    this.partRippleWidth = this.rippleEffWidth / 2;

    window.addEventListener("mouseup", this.purgeRipples);
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.purgeRipples);
  },
  methods: {
    addRipple(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect();
      const rippleId = Date.now();
      this.ripples.push({
        width: `${this.rippleEffWidth}px`,
        height: `${this.rippleEffWidth}px`,
        left: `${e.clientX - left - this.partRippleWidth}px`,
        top: `${e.clientY - top - this.partRippleWidth}px`,
        id: rippleId,
      });
    },
    purgeRipples() {
      this.ripples = [];
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
main {
  margin: 0;
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f3f7;
}
main {
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
}
main > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin: 20px;
}

.btn {
  text-align: center;
  border-radius: 4px;
  user-select: none;

  cursor: pointer;
  background: #2498e6;
  color: #fff;
  transition: 0.3s ease-out;
  text-transform: uppercase;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.ripple-outer {
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
}
.ripples {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
.ripple {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}

.grow-enter-active,
.grow-enter-to-active {
  transition: all 1700ms ease-out;
}
.grow-leave-active,
.grow-leave-to-active {
  transition: all 800ms ease-out;
}

.grow-enter {
  transform: scale(0);
  opacity: 1;
}

.grow-enter-to {
  transform: scale(4);
  opacity: 1;
}

.grow-leave {
  transform: scale(4);
  opacity: 1;
}
.grow-leave-to {
  transform: scale(4);
  opacity: 0;
}
</style>
