<template>
  <div class="flex width white">
    <h2>współpraca</h2>
    <p>
      Poszukujesz kogoś na dłużej do pracy przy ciekawym projekcie? Prowadzisz
      własną działalność i szukasz pracownika? Czy może chcesz przyłączyć się do
      naszej sieci coworkingowej? Zapraszam do kontaktu!
    </p>
    <router-link to="/contact">
      <HandShake />
    </router-link>
  </div>
</template>

<script>
import HandShake from "./HandShake.vue";
export default {
  name: "Partner",
  components: {
    HandShake
  }
};
</script>

<style lang="scss" scoped>
.width {
  width: 80%;
  margin: auto;
  text-align: center;
  margin-bottom: 100px;
}
p {
  padding: 20px 0px;
}
@media (max-width: 769px) {
  .width {
    width: 100%;
  }
}
</style>
