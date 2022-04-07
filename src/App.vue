<!-- eslint-disable max-len -->
<style>
  body{
    overflow-x: hidden !important;
  }
  .bordaRoxa{
    border: 1px solid !important;
    border-color: #940CC4 !important;
    background: #fff !important;
  }
  @media only screen and (max-width: 959px) {
    .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
      display: flex !important;
    }
  }
  .v-stepper__step__step {
    background-color: #940CC4 !important;

  }
  .v-application--wrap {
    min-height: auto !important;
  }
  .v-item-group.v-bottom-navigation .v-btn {
    min-width: 65px !important;
    height: inherit !important;
  }
  .v-item-group.v-bottom-navigation {
    box-shadow: 0px -5px 20px 5px rgb(0 0 0 / 30%) !important;
  }
  .v-bottom-navigation{
    background: #f5f5f5 !important;
  }
  #menu_icon.v-btn:not(.v-btn--active) {
    color: #000 !important;
  }
</style>

<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
    <v-bottom-navigation v-model="value" fixed color="#940CC4" style="">
      <v-btn id="menu_icon" value="home" to="/">
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn id="menu_icon" value="agende" to="/agendamento">
        <v-icon>mdi-calendar-clock</v-icon>
      </v-btn>

      <v-btn id="menu_icon" value="pets" to="/meus-pets">
        <v-icon>mdi-paw-outline</v-icon>
      </v-btn>
      <v-btn id="menu_icon" value="history" to="/historico-servicos">
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn id="menu_icon" value="config">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      info: null,
      value: '',
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => { this.info = response; });
  },
};
</script>
