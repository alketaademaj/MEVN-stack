<template>
  <div>
    <img :src="image">
    <p><i>Tervetuloa takaisin, USERNAME!</i></p>
    <p>Löydät sovelluksen toimintoja alla olevasta valikosta.</p>
    <div id="toiminnot-nav">
      <ul>
        <li><router-link to="/recipes">Etsi reseptejä</router-link></li>
        <li><router-link to="/createrecipe">Luo uusi resepti</router-link></li>
        <li><router-link to="/about">Ruokahävikki</router-link></li>
        <li><router-link to="/about">Tilastotietoa</router-link></li>
        <li><router-link to="/about">Tietoa sovelluksesta</router-link></li>
        <li><router-link to="/Fridge">Jääkaappi</router-link></li>
      </ul>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import image from "../assets/tastenowaste-logo.png"

export default {
  name: 'Content',
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
