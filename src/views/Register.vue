<!-- eslint-disable max-len -->
<style scoped>
.v-text-field--outlined >>> fieldset {
  border: 3px solid #940CC4;
}
</style>
<template>
  <v-app style="display: flex; justify-content: center; align-items: center;" class="pa-5">
    <div class="mx-auto text-center mb-4"  style="display: flex; justify-content: center; align-items: start;">
      <v-img
      width="145"
      height="85"
      src="../assets/Logo_TDB.png">
      </v-img>
    </div>
    <v-card width="85vw" class="mx-auto mb-4 py-5 mt-1" style="border-radius: 20px; box-shadow: 5px 5px 25px #00000075">
      <v-card-title class="px-auto mx-auto" style="justify-content: center; font-family: 'Nunito', sans-serif; font-size: 18px; text-align: center; line-height: 1.2rem; color: #940CC4;"><span><b>Complete seu cadastro </b></span></v-card-title>
      <v-card-text class="mb-2">
        <v-form>
          <v-text-field
          style="background: #FFF; border-radius: 50px;"
          class="mb-2"
          outlined
          hide-details
          type="text"
          name="nome"
          v-model="nome"
          label="Digite seu nome completo"></v-text-field>
          <v-text-field
          style="background: #FFF; border-radius: 50px;"
          class="mb-2"
          outlined
          hide-details
          type="text"
          name="email"
          v-model="email"
          label="Digite seu email"></v-text-field>
          <v-text-field
          style="background: #FFF; border-radius: 50px;"
          class="mb-2"
          outlined
          hide-details
          type="text"
          name="tel"
          v-model="tel"
          label="Digite seu número de telefone"></v-text-field>
          <v-text-field
          style="background: #FFF; border-radius: 50px;"
          class="mb-2"
          outlined
          hide-details
          name="password"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          label="Digite sua senha"></v-text-field>
          <v-text-field
          style="background: #FFF; border-radius: 50px;"
          class="mb-2"
          outlined
          hide-details
          name="password"
          v-model="confirm_password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          label="Repita sua senha"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="mt-n6" style="display: grid; justify-items: center; align-items: center;">
        <v-btn
        class="mb-1"
        style="border-radius: 50px; background: #940CC4;"
        text
        color="white"
        width="95%"
        @click="register"
        >
          <span>Finalizar Cadastro</span>
        </v-btn>
      </v-card-actions>
      <div style="display: grid; justify-items: center; align-items: center;">
        <v-btn
        class="mt-1"
        text
        color="black"
        width="95%"
        href="./login"
        >
          <span>Voltar</span>
        </v-btn>
      </div>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { sha256 } from 'js-sha256';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      show1: false,
      nome: '',
      email: '',
      tel: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        nome: this.nome,
        email: this.email,
        tel: this.tel,
        password: sha256(this.password),
      });
      console.log(response.data);
      this.$router.push('/login');
    },
  },
};
</script>
