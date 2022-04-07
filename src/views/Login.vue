<!-- eslint-disable max-len -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  .v-text-field--outlined >>> fieldset {
    border: 3px solid #940CC4;
  }
  .v-application--wrap {
    min-height: auto !important;
  }
  .mdi-key-outline {
    color: black !important;
  }
  .mdi-email-outline {
    color: black !important;
  }
  .mdi-eye-outline {
    color: black !important;
  }
  .mdi-eye-off-outline {
    color: black !important;
  }
  .hexagonal1 {
    width: 25px;
    height: 25px;
    top: 0.5px;
    left: 13.9px;
    background: rgba(5,113,142,1);
    transform: rotate(45deg);
    position: relative;
    margin: 0;
  }
  .hexagonal2 {
    width: 25px;
    height: 25px;
    top: 0.5px;
    left: -13.9px;
    background: rgba(54,156,160,1);
    transform: rotate(45deg);
    position: relative;
  }
  .btnhex {
    position: relative;
    background: #3DBBDC;
    color: white;
    border-radius: 30px;
  }
</style>

<template>
  <v-app style="display: flex; justify-content: center; align-items: start;" class="py-10 px-3">
    <div class="mx-auto text-center mb-8"  style="display: flex; justify-content: center; align-items: start;">
      <v-img
      width="145"
      height="85"
      src="../assets/Logo_TDB.png">
      </v-img>
    </div>
    <v-card width="85vw" class="mx-auto mb-4 py-5 mt-1" style="border-radius: 20px; box-shadow: 5px 5px 25px #00000075">
      <v-card-title class="px-auto mx-auto" style="justify-content: center; font-family: 'Nunito', sans-serif; font-size: 18px; text-align: center; line-height: 1.2rem; color: #940CC4;"><span><b>Mais facilidade para marcar o<br> banho do seu Aumigo</b></span></v-card-title>
      <v-card-subtitle class="px-auto mx-auto" style="justify-content: center; font-family: 'Nunito', sans-serif; text-align: center; font-size: 14px; line-height: 1.2rem; color: #000">Insira seu email e senha para continuar</v-card-subtitle>
      <v-card-text class="mb-5">
        <v-form>
          <v-text-field v-model="email" label="Digite seu email" color="#940CC4" outlined hide-details prepend-inner-icon="mdi-email-outline" class="mb-5 pl-2" style="background: #FFF; border-radius: 50px;"></v-text-field>
          <v-text-field
          class="pl-2"
          outlined
          label="Digite sua senha"
          hide-details
          prepend-inner-icon="mdi-key-outline"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="Ao menos 8 caracteres"
            @click:append="show1 = !show1"
            style="background: #FFF; border-radius: 50px;"
          ></v-text-field>
          <v-checkbox
          color="#940CC4"
          hide-details
          v-model="checkbox"
          label="Lembrar senha"
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-card-actions class="mt-n6 mx-auto" style="display: flex; justify-content: center; align-items: center;">
        <v-btn
        style="border-radius: 50px; background: #940CC4;"
        text
        color="white"
        width="94%"
        v-on:click="login"
        >
          <span>Entrar</span>
        </v-btn>
      </v-card-actions>
      <div style="display: grid; justify-items: center; align-items: center;">
        <v-btn
          text
          color="#940CC4"
          width="100%"
          href="./register"
          style="font-size: 12px; text-transform: none; text-decoration: underline #940CC4;"
          >
            <span>Não possui cadastro? Clique aqui.</span>
          </v-btn>
          <v-btn
          text
          color="#940CC4"
          width="48%"
          href="./recover"
          style="font-size: 12px; text-transform: none; text-decoration: underline #940CC4;"
          >
            <span>Esqueci minha senha</span>
          </v-btn>
      </div>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-alert */
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
  data() {
    return {
      show1: false,
      email: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } else {
        alert('Login Invalido');
      }
      console.log(response.data.item);
    },
  },
};
</script>
