<template>
  <div>
    <button @click="$router.push(button.link)">{{ button.text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["button"]
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  overflow: hidden;
  background: #f2c96e;
  color: #d04844;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 400ms;
    opacity: 0;
    transform: translate(-100%, -10%) rotate(-40deg);
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:hover:before {
    opacity: 0.7;
    transform: translate(80%, -10%) rotate(-40deg);
  }
}
</style>
