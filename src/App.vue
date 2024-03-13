<template>
  <router-view></router-view>
</template>

<script></script>

<style>
body {
  margin: 0;
  font-family: Montserrat, sans-serif !important;
}
input.form-control {
  font-size: 16px;
}
input.form-control:focus {
  border-color: #0000001f;
}
input.form-control::placeholder {
  color: rgba(0, 0, 0, 0.389);
}
.input-group-text {
  font-size: 20px;
  background-color: transparent;
  border-right: 0px;

  i {
    color: rgba(0, 0, 0, 0.56);
  }
}
.input-group-text + input {
  border-left: 0px;
}
a {
  text-decoration: none;
}
select {
  font-size: 15px !important;
}
</style>
