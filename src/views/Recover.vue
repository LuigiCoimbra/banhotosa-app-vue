<!-- eslint-disable max-len -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  .v-text-field--outlined >>> fieldset {
    border: 3px solid #940CC4;
  }
  >>> .v-dialog{
    overflow-x: hidden !important;
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
  <v-app style="display: flex; justify-content: center; align-items: center;" class="py-15 px-3">
    <div class="mx-auto text-center mb-8"  style="display: flex; justify-content: center; align-items: start;">
      <v-img
      width="145"
      height="85"
      src="../assets/Logo_TDB.png">
      </v-img>
    </div>
    <v-card width="85vw" class="mx-auto mb-4 py-5 mt-1" style="border-radius: 20px; box-shadow: 5px 5px 25px #00000075">
      <v-card-title class="px-auto mx-auto" style="justify-content: center; font-family: 'Nunito', sans-serif; font-size: 18px; text-align: center; line-height: 1.2rem; color: #940CC4;"><span><b>Recuperar senha</b></span></v-card-title>
      <v-card-subtitle class="px-auto mx-auto" style="justify-content: center; font-family: 'Nunito', sans-serif; text-align: center; font-size: 14px; line-height: 1.2rem; color: #000">Informe seu e-mail e enviaremos um link de recuperação.</v-card-subtitle>
      <v-card-text class="mb-5">
        <v-form>
          <v-text-field v-model="email" label="Digite seu email" color="#940CC4" outlined hide-details prepend-inner-icon="mdi-email-outline" class="mb-5 pl-2" style="background: #FFF; border-radius: 50px;"></v-text-field>
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
          <span>Enviar</span>
        </v-btn>
        <v-dialog
        v-model="dialog"
        style="background: #fff;"
        transition="dialog-top-transition"
        persistent
        fullscreen
        hide-overlay>
              <v-card style="display: flex; justify-content: center; align-items: center;">
                <v-row>
                  <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                    <v-img
                width="145px"
                height="85px"
                contain
                src="../assets/Logo_TDB.png">
                </v-img>
                  </v-col>
                  <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                    <v-card class="pa-4" width="95vw" style="display: flex; justify-content: center; flex-direction: column; align-items: center; border: 1px solid #00C26E; border-radius: 20px;">
                      <v-card-title>
                        <v-icon color="#00C26E" size="45">mdi-check-circle</v-icon>
                      </v-card-title>
                      <v-card-title size="35" style="color: #00C26E; font-family: 'Nunito', sans-serif; text-align: center;" color="#00C26E"><b>Recuperação de<br>senha enviada!</b></v-card-title>
                      <v-card-text size="12" style="color: #00C26E; font-family: 'Nunito', sans-serif; text-align: center;">
                        <p>Um email de recuperação de senha foi enviado para:<br><b>{{ this.email }}</b></p>
                        <p>Verifique sua caixa de entrada e acesse o link enviado para o email informado.</p>
                      </v-card-text>
                      <v-card-action width="100%" class="my-4 mx-auto" style="display: flex; justify-content: center; align-items: center;">
                        <v-btn
                          text
                          style="border-radius: 50px; background: #00C26E; min-width: 80vw !important;"
                          color="white"
                          @click="dialog = false"
                        >
                          OK
                        </v-btn>
                      </v-card-action>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
        </v-dialog>
        <v-dialog
        v-model="dialog2"
        style="background: #fff; overflow-x: hidden !important;"
        transition="dialog-top-transition"
        persistent
        fullscreen
        hide-overlay>
              <v-card style="display: flex; justify-content: center; align-items: center;">
                <v-row>
                  <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                    <v-img
                width="145px"
                height="85px"
                contain
                src="../assets/Logo_TDB.png">
                </v-img>
                  </v-col>
                  <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
                    <v-card class="pa-4" width="95vw" style="display: flex; justify-content: center; flex-direction: column; align-items: center; border: 1px solid #CD3C3C; border-radius: 20px;">
                      <v-card-title>
                        <v-icon color="#CD3C3C" size="45">mdi-close-circle</v-icon>
                      </v-card-title>
                      <v-card-title size="35" style="color: #CD3C3C; font-family: 'Nunito', sans-serif; text-align: center;" color="#CD3C3"><b>Email não cadastrado!</b></v-card-title>
                      <v-card-text size="12" style="color: #CD3C3C; font-family: 'Nunito', sans-serif; text-align: center;">
                        <p>O email: <b>{{ this.email }}</b><br>não existe em nossa base de dados</p>
                      </v-card-text>
                      <v-card-action width="100%" class="my-4 mx-auto" style="display: flex; justify-content: center; align-items: center;">
                        <v-btn
                          text
                          style="border-radius: 50px; background: #CD3C3C; min-width: 80vw !important;"
                          color="white"
                          @click="dialog2 = false"
                        >
                          Voltar
                        </v-btn>
                      </v-card-action>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
        </v-dialog>
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
/* eslint-disable no-alert */
// import { sha256 } from 'js-sha256';
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Recover',
  data() {
    return {
      dialog: false,
      dialog2: false,
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
      const response = await AuthenticationService.recover({
        email: this.email,
      });
      console.log(response.status);
      if (response.status === 200) {
        this.dialog = true;
      } else {
        this.dialog2 = true;
      }
      console.log(response.data.item);
    },
  },
};
</script>
