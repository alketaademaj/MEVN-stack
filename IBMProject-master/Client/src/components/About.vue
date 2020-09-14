<template>
  <div>
    <h1>Tietoa sovelluksesta</h1>
    <img :src="image">
    <p>Ruokahävikki on ruokaa, jonka päätyminen roskiin olisi voitu välttää ennakoimalla ruoan kulutusta sekä säilömällä tai valmistamalla ruoka toisin. Suomessa kotitaloudet heittävät ruokaa roskiin vuosittain 120-160 miljoonaa kiloa, joka tarkoittaa henkilöä kohden 20-25 kiloa vuodessa. Maailmanlaajuisesti noin kolmannes tuotetusta ruoasta heitetään pois, jolla arvioiden mukaan voitaisiin ruokkia jopa kaksi miljardia ihmistä! Poisheitetty ruoka on aina turhaan tuotettua ja se rasittaa talouden lisäksi myös ympäristöä. Maailman viljelykelpoisesta maasta käytetään kolmannes ruoan tuotantoon, jota ei lopulta tulla edes käyttämään. </p>
    <p>Ruokahävikin aiheuttama hiilijalanjälki on valtava ja kolmannes kulutuksen aiheuttamasta ympäristökuormasta syntyy ruoasta. Mikäli ruoka päätyy roskiin, tuotantoketjun päästöt ovat syntyneet turhaan. Suomessa poisheitetyn ruoan määrän on arvioitu tuottavan yhtä paljon hiilidioksidipäästöjä kuin noin 100 000 keskivertohenkilöautoa. Maailmanlaajuinen ruokahävikki on niin suurta, että jos se olisi valtio, sen hiilijalanjälki olisi kolmanneksi suurin Yhdysvaltojen ja Kiinan jälkeen. Pyrimme sovelluksellamme vastaamaan näihin ongelmiin ja tarjoamme työkalun ruokahävikin minimoimiseen. Sovelluksen avulla vaivattomasti hyödyntää pian pilalle meneviä tuotteita reseptihaun kautta, seurata ruokahävikin määrää ja mistä hävikkisi syntyy.</p>
    <p>Tavoitteenamme on vähentää ruokahävikin määrää sekä lisätä tietoisuutta sen aiheuttamista ympäristövaikutuksista.  Suunnittelemattomuus, keittiötaitojen heikkous ja viitseliäisyyden puute sekä tähteiden hyödyntämättömyys ovat yleisimpiä syitä kotitalouksissa syntyneeseen ruokahävikkiin.</p>
    <p>Jokainen voi omilla toimillaan vaikuttaa ruoan ilmastopäästöihin ja pienentää omaa hiilijalanjälkeään vähentämällä poisheitetyn ruoan määrää. Lähde mukaan tekemään konkreettisia toimia maapallon pelastamiseksi ja nauti samalla hyvästä ruoasta! </p>   
      <!--testi. -->
      
  </div>
</template>

<script>
import image from "../assets/tastenowaste-logo.png"

export default {
  data() {
    return {
      image: image
    }
  }
}
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