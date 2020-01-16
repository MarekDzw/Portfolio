<template>
  <div>
    <div class="btn">
      <slot></slot>
      <span class="BorderTopBottom"></span>
      <span class="BorderLeftRight"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBorder"
};
</script>

<style lang="scss" scoped>
.btn {
  width: 170px;
  margin: 0 20px;
  padding: 15px 0;
  text-align: center;
  float: left;
  cursor: pointer;
  position: relative;
}

.BorderTopBottom:before {
  content: "";
  position: absolute;
  width: 50px;
  height: 3px;
  top: -6px;
  left: -7px;
  background: #d04844;
  transition: all 0.5s ease;
}

.BorderTopBottom:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 3px;
  bottom: -6px;
  right: -7px;
  background: #d04844;
  transition: all 0.5s ease;
}

.BorderLeftRight:before {
  content: "";
  position: absolute;
  top: -4px;
  left: -7px;
  width: 3px;
  height: 25px;
  background: #d04844;
  transition: all 0.5s ease;
}

.BorderLeftRight:after {
  content: "";
  position: absolute;
  bottom: -4px;
  right: -7px;
  width: 3px;
  height: 25px;
  background: #d04844;
  transition: all 0.5s ease;
}
.btn:hover a {
  color: #d04844;
  transition: all 0.5s ease;
}
.btn:hover .BorderTopBottom:before,
.btn:hover .BorderTopBottom:after {
  width: 184px;
  transition: all 0.5s ease;
}

.btn:hover .BorderLeftRight:before,
.btn:hover .BorderLeftRight:after {
  height: 57px;
  transition: all 0.5s ease;
}

</style>
