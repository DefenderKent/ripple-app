export default {
  bind(el, bindings) {
    const args = bindings.arg;
    el.style[args] = bindings.value;
  },
};
