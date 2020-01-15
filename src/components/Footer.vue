<template>
  <div class="footer">
    <div class="wrapper">
      <p>
        Marek Dzwonnik 2019 © All rights reserver.
        <br class="none" />Designed by
        <a href="https://grudzienkatarzyna.pl/" target="blank">Katarzyna Grudzień.</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background: #394c8d;
  color: white;
  padding: 20px 0px;
  .none {
    display: none;
  }
}
a {
  color: white;
  text-decoration: none;
  &:hover {
    color: #f2c96e;
  }
}
@media (max-width: 769px) {
  .footer {
    .none {
      display: block;
    }
  }
}
</style>
