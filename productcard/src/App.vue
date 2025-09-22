<template>
<div id="app">
<ProductCard
name="Українська вишиванка"
description="Стильна вишиванка з традиційними орнаментами."
price="1500"
image="https://tse2.mm.bing.net/th/id/OIP.KJeynP5b1Mze21fe7Kbi7gHaJj?rs=1&pid=ImgDetMain&o=7&rm=3"/>
</div>
</template>

<script>
import ProductCard from './components/ProductCard.vue'

export default {
  components: {
    ProductCard,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
