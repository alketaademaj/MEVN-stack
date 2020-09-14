<template>
  <div>
    <ul>
      <li>
        Lataa reseptejä
      </li>
    </ul>
  </div>
</template>

<script>
import image from "../assets/tastenowaste-logo.png"

export default {
  name: 'createrecipe',
  props: {
    msg: String
  },
  data() {
    return {
      image: image
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
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
