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
  background: #f2c96e;
  color: #d04844;
  padding: 5px 25px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #ffe09a;
    color: #ff9c9a;
  }
}
</style>
