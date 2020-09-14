<template>
<div>
 <img :src="image">
    <h1> kukkuuu </h1>
</div>
</template>

<script>
import image from "../assets/tastenowaste-logo.png"

export default {
  name: 'Fridge',
  props: {
    msg: String
  },
  data() {
    return {
      image: image
    }
  },
  mounted() {
    console.log(this.$store.state.auth);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
img {
  margin: 10px 3px 10px 3px;
}
#toiminnot-nav a {
  color: black;
}
#toiminnot-nav a:hover {
  text-decoration: underline;
}
</style>
