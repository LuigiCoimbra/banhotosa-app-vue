<!-- eslint-disable eqeqeq -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-parsing-error -->
<style>
  .card_hover{
    background: #fff;
  }

  .icon{
    color: #940CC4 !important;
  }

  .card_hover:hover {
    background: #3DBBDC !important;
    transition: 0.5s;
  }

  .card_hover:hover .icon{
    color: #fff !important;
    transition: 0.5s;
  }

  .card_hover:hover .titulo {
    color: #fff !important;
    transition: 0.5s;
  }

  .v-window__prev, .v-window__next{
    margin: 0 -18px !important;
    background: #fff !important;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .mdi-chevron-right, .mdi-chevron-left{
    color: #E5E5E5 !important;
  }

  .v-carousel__item{
    border-radius: 10px;
    height: 250px !important;
  }

  .v-carousel{
    height: 250px !important;
  }

  @media only screen and (min-width:450px){
    .v-carousel__item{
    /* border-radius: 10px; */
    height: 500px !important;
    }
    .v-carousel{
      height: 500px !important;
    }
  }
</style>
<template>
  <v-app>
      <!-- <v-app-bar
        color="white"
        light
        fixed
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title><v-img
      width="75"
      height="auto"
      src="../assets/Frame-Logo.png">
      </v-img></v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer> -->
      <v-main>
        <v-row style="display: flex; justify-content: center; align-items: center;" v-if="isHome" class="my-5">
          <v-col cols="10" md="2" lg="2" class="mt-5 ">
            <h1 style="font-family: 'Nunito', sans-serif; font-size: 21px; line-height: 1.2rem; color: #940CC4;">Olá, Seja bem-vindo(a)</h1>
            <h2 class="mt-2" style="font-family: 'Nunito', sans-serif; font-size: 12px; line-height: 1.2rem; color: #940CC4;">Faça seu <a href="/login">login</a> ou <a href="/register">cadastre-se</a></h2>
          </v-col>
        </v-row>
        <v-row style="display: flex; justify-content: center; align-items: center;" v-if="isHome">
          <v-col cols="10" md="6" lg="6" class="mt-2">
            <h2 class="mb-2" style="font-family: 'Nunito', sans-serif; font-size: 16px; line-height: 1.2rem; color: #940CC4;">Confira as novidades da TDB:</h2>
            <v-carousel hide-delimiters style="border-radius: 10px !important; overflow: visible;">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row style="display: flex; justify-content: center; align-items: center;" v-if="isHome">
          <v-col cols="10" md="2" lg="2">
            <h2 style="font-family: 'Nunito', sans-serif; font-size: 16px; line-height: 1.2rem; color: #940CC4;">O que você deseja fazer?</h2>
          </v-col>
          <v-col cols="11" md="2" lg="2" class="mt-5">
            <v-card
              class="card_hover"
              to="/agendamento"
              style="display: flex; justify-content: center; align-items: center; border-radius: 10px; font-family: 'Nunito', sans-serif; background: #FFC666"
            >
            <v-card-subtitle class="titulo" style="font-size: 16px; color: #940CC4"><b>Agende seu Banho</b></v-card-subtitle>
            <v-icon size="30" class="icon">mdi-arrow-right</v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="display: flex; justify-content: center; align-items: center;" v-if="isHome">
          <v-col cols="3" md="2" lg="2" class="mt-5 pa-0 mx-2">
            <v-card
              class="card_hover"
              to="/meus-pets"
              style="display: grid; justify-content: center; align-items: center; border-radius: 10px; font-family: 'Nunito', sans-serif;"
            >
            <v-icon size="35" class="icon">mdi-paw</v-icon>
            <v-card-subtitle class="titulo" style="font-size: 12px; font-family: 'Nunito', sans-serif; text-align: center;"><b>Meus<br>Pets</b></v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3" md="2" lg="2" class="mt-5 pa-0 mx-2">
            <v-card
              class="card_hover"
              to="/historico-servicos"
              style="display: grid; justify-content: center; align-items: center; border-radius: 10px; font-family: 'Nunito', sans-serif;"
            >
            <v-icon size="35" class="icon">mdi-shower</v-icon>
            <v-card-subtitle class="titulo" style="font-size: 12px; font-family: 'Nunito', sans-serif; text-align: center;"><b>Menu de Banhos</b></v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3" md="2" lg="2" class="mt-5 pa-0 mx-2 ">
            <v-card
              class="card_hover"
              to="/historico-servicos"
              style="display: grid; justify-content: center; align-items: center; border-radius: 10px; font-family: 'Nunito', sans-serif;"
            >
            <v-icon size="35" class="icon">mdi-history</v-icon>
            <v-card-subtitle class="titulo" style="font-size: 12px; font-family: 'Nunito', sans-serif; text-align: center;"><b>Historico de Serviços</b></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="display: flex; justify-content: center; align-items: center;" v-if="isHome">
          <v-col cols="10" md="2" lg="2" class="mb-15">
            <h1 class="my-5" style="font-family: 'Nunito', sans-serif; font-size: 16px; line-height: 1.2rem; color: #940CC4;">Conheça mais sobre o Centro de Estética</h1>
            <v-carousel hide-delimiters style="border-radius: 10px !important; overflow: visible;">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
// import EventTable from '../components/EventTable.vue';

export default {
  name: 'Home',
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    },
  },
};
</script>
