<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/valid-v-on -->
<style>
  /* .bordaRoxa{
    border: 1px solid !important;
    border-color: #940CC4 !important;
  } */
  .espaco{
    margin-bottom: 50px;
  }
  .v-btn::before{
    background-color: inherit !important;
  }
  .v-stepper__label {
    text-align: center !important;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 18px;
    color: #940CC4 !important;
  }
</style>
<template>
  <v-stepper v-model="e1">
    <v-card elevation="0" style="background: #940CC4; display: flex; padding: 10px; border-radius: 0px" v-if="e1!==1">
      <v-btn icon @click="e1--"><v-icon color="white" size="25" style="transform: rotate(270deg)">mdi-triangle</v-icon></v-btn>
    </v-card>
    <v-stepper-header style="box-shadow: none; display: flex; justify-content: center; align-items: center;">
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        color="#940CC4"
        v-if="e1 === 1"
      >
        Para qual bichinho você quer agendar?
      </v-stepper-step>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        v-if="e1 === 2"
        color="#940CC4"
      >
        Selecione os serviços desejados
      </v-stepper-step>

      <v-stepper-step step="3" v-if="e1 === 3" :complete="e1 > 2" color="#940CC4">
        Escolha o melhor dia
      </v-stepper-step>

      <v-stepper-step step="4" v-if="e1 === 4" :complete="e1 > 3" color="#940CC4">
        Escolha um horário<br>disponível em
      </v-stepper-step>

      <v-stepper-step step="5" v-if="e1 === 5" :complete="e1 > 4" color="#940CC4">
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" class="pa-0" style="margin-bottom: 15%">
        <v-card elevation="0" style="display: grid; justify-content: center; align-items: center;">
            <v-btn-toggle class="" style="display: grid; justify-content: center; align-items: center; font-family: 'Nunito', sans-serif;" v-model="toggle_exclusive" group background-color="#fff">
              <v-btn
              active-class="bordaRoxa"
              style="border-radius: 20px; border: 1px solid #C4C4C4; width: 85vw; height: 100px; background: #fff; padding-inline: 5rem; justify-content: flex-start;"
              class="my-3"
              v-for="(pet, i) in servicos"
              :key="i"
              >
              <v-avatar size="56" style="overflow: visible;">
                <v-img src="../assets/dog_icon.png"
                style="margin-right: 15px"
                ></v-img>
              </v-avatar>
              <span style="text-align: left; text-transform: capitalize; font-family: 'Nunito', sans-serif;"><b style="color: #940CC4; font-weight: bold; text-transform: capitalize; font-size: 16px">{{ pet.nome_pet }}</b><br>
              <b style="color: black !important; font-weight: 400; font-size: 12px">{{ pet.raca_pet }}</b></span>
              </v-btn>
            </v-btn-toggle>
            <v-btn
              color="primary"
              @click="e1 = 2"
              style="border-radius: 50px; background: #940CC4 !important;"
            >
              Continue
            </v-btn>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2" class="pa-0 mb-15">
        <v-card style="display: grid; justify-content: center; align-items: center;">
            <v-btn-toggle class="" style="display: grid; justify-content: center; align-items: center; font-family: 'Nunito', sans-serif;" v-model="toggle_exclusive1" group background-color="#fff">
              <v-btn
              active-class="bordaRoxa"
              style="border-radius: 20px; border: 1px solid #C4C4C4; width: 85vw; height: 100px; background: #fff; justify-content: center; align-items: center; opacity: 1 !important;"
              class="my-3 pa-0"
              v-for="(banho, i) in banhos"
              :key="i">
              <b style="color: black;">{{ banho.description }}<br>
              {{ banho.price }}</b>
              <!-- <v-card style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; z-index: 1" elevation="0" @click.stop="show = !show"> -->
                <v-expansion-panels v-if="i == 0" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 4px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 6" class="pa-0" @click.stop>
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-else-if="i == 1" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 5" class="pa-0">
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-else-if="i == 2" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 4" class="pa-0">
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-else-if="i == 3" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 3" class="pa-0">
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-else-if="i == 4" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 2" class="pa-0">
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-else-if="i == 5" accordion style="position: absolute; top: 3.5rem;left: 0rem; padding: 2px; width: 100%; border-width: 0px 1px 1px 1px; border-style: solid; border-color: #C4C4C4; border-radius: 0px 0px 50px 50px; background: #C4C4C4; display: flex; gap: 4rem; opacity: 1; z-index: 1" class="pa-0">
                  <v-expansion-panel style=" background-color: #C4C4C4; opacity: 1">
                    <v-expansion-panel-header class="py-1 px-2" style="color: #666666; min-height: auto; background-color: #C4C4C4; opacity: 1; border-radius: 0px 0px 50px 50px;">Ver mais detalhes</v-expansion-panel-header>
                    <v-expansion-panel-content style=" background-color: #C4C4C4; white-space: break-spaces; opacity: 1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              <!-- </v-card> -->
              </v-btn>
            </v-btn-toggle>
            <v-btn
              color="primary"
              @click="e1 = 3;"
              style="border-radius: 50px; background: #940CC4 !important; margin-bottom: 190px"
              class="mt-3"
            >
              Continue
            </v-btn>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="auto"
        >
          <v-date-picker width="100%" color="#940CC4" v-model="picker" :min="this.today"></v-date-picker>
        </v-card>

        <v-btn
          color="primary"
          @click="getAvailableDate(); e1 = 4"
          style="border-radius: 50px; background: #940CC4 !important; margin-bottom: 190px; width: 100%"
          class="mt-3"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card elevation="0" style="display: grid; justify-content: center; align-items: center;">
          <v-card-title>{{ this.date }}</v-card-title>
          <v-btn-toggle style="display: grid; justify-content: center; align-items: center; font-family: 'Nunito', sans-serif;" v-model="toggle_exclusive2" group>
            <v-btn
            active-class="bordaRoxa"
            class="ma-3"
            style="border-radius: 50px; background: #fff;"
            v-for="(time, i) in scheduledTime"
            :key="i">
              {{ time.hour }}
            </v-btn>
          </v-btn-toggle>
        </v-card>

        <v-btn
          color="primary"
          @click="arrBdr(); e1 = 5"
          style="border-radius: 50px; background: #940CC4 !important; margin-bottom: 190px; width: 100%"
          class="mt-3"
        >
          Continue
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card elevation="2" style="display: grid; justify-content: center; align-items: center;">
          <v-card-title>Confirmar Agendamento</v-card-title>
          <v-card-subtitle>
            <p style="font-family: 'Nunito', sans-serif; font-weight: bold; font-size: 16px;">{{ this.agendamentoInfo[0].title }}</p>
            <p>No dia {{ this.date }} ás {{ this.agendamentoInfo[0].hour }}</p>
            <p>Nome do Pet: {{ this.agendamentoInfo[0].name }}</p>
            <p>{{ this.agendamentoInfo[0].price }}</p>
          </v-card-subtitle>
        </v-card>

        <v-btn
          color="primary"
          @click="sendAppointment()"
          style="border-radius: 50px; background: #940CC4 !important; margin-bottom: 190px; width: 100%"
          class="mt-3"
        >
          Confirmar
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
                    <v-card class="pa-4" width="95vw" style="display: flex; justify-content: center; flex-direction: column; align-items: center; border: 1px solid #00C26E; border-radius: 20px;">
                      <v-card-title>
                        <v-icon color="#00C26E" size="45">mdi-check-circle</v-icon>
                      </v-card-title>
                      <v-card-title size="35" style="color: #00C26E; font-family: 'Nunito', sans-serif; text-align: center;" color="#00C26E"><b>Sua solicitação<br>foi enviada!</b></v-card-title>
                      <v-card-text size="12" style="color: #00C26E; font-family: 'Nunito', sans-serif; text-align: center;">
                        <p>Sua solicitação foi enviada! Aguarde a confirmação do centro de estética.Você pode verificar o status na tela Historico de Serviços </p>
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
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Agendamento',
  data() {
    return {
      dialog: false,
      token1: this.token,
      today: '',
      banhoSel: '',
      priceSel: '',
      selected: [true, false, false],
      // dateToStr: this.agendamento[0].date,
      servicos: [],
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 50000)).toISOString().substr(0, 10),
      toggle_exclusive: '',
      toggle_exclusive1: '',
      toggle_exclusive2: '',
      scheduledTime: [],
      e1: 1,
      agendamento: [],
      agendamentoInfo: [
        {
          title: '',
          price: '',
          name: '',
          date: '',
          time: '',
        },
      ],
      banhos: [],
      nome_pet: '',
    };
  },
  methods: {
    async reloadPetList() {
      const response = await AuthenticationService.petList();
      console.log(response.data.name);
      if (response.status === 200) {
        this.servicos = response.data.map((item) => ({
          pet_id: item.id,
          nome_pet: item.name,
          peso_pet: item.weight,
          nascimento_pet: item.birthday,
          raca_pet: item.type,
        }));
      } else {
        alert('Erro ao carregar dados');
      }
      console.log(this.date);
    },
    async GetBaths() {
      const response = await AuthenticationService.getBaths();
      if (response.status === 200) {
        this.banhos = response.data.map((banho) => ({
          id: banho.id,
          description: banho.description,
          price: banho.price,
        }));
      }
      console.log(response.data);
    },
    async getAvailableDate() {
      const response = await AuthenticationService.getAvailableDate({
        selDate: this.picker,
      });
      if (response.status === 200) {
        this.scheduledTime = response.data.map((time) => ({
          hour: time.hour,
        }));
      }
      console.log(this.scheduledTime);
      console.log(this.picker);
    },
    getToday() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      const yyyy = today.getFullYear();

      today = `${yyyy}-${mm}-${dd}`;
      this.today = today;
      console.log(this.date);
    },
    async arrBdr() {
      this.agendamento.push({
        bathId: this.banhos[this.toggle_exclusive].id,
        title: this.banhos[this.toggle_exclusive1].description,
        price: this.banhos[this.toggle_exclusive1].price,
        name: this.servicos[this.toggle_exclusive].nome_pet,
        date: this.picker,
        time: this.scheduledTime[this.toggle_exclusive2].hour,
      });
      this.agendamentoInfo = await this.agendamento.map((info) => ({
        bathId: info.bathId,
        details: info.title,
        date: this.dateFormat(info.date),
        hour: info.time,
        name: info.name,
        price: info.price,
      }));
      console.log(this.agendamentoInfo);
    },
    dateFormat(date) {
      const tDate = date.split('-');
      return `${tDate[2]}/${tDate[1]}/${tDate[0]}`;
    },
    async sendAppointment() {
      const response = await AuthenticationService.sendAppointment(
        this.agendamentoInfo[0],
      );
      if (response.status === 201) {
        console.log(response);
        this.dialog = true;
      }
      console.log(response);
    },
  },
  mounted() {
    this.user = localStorage.getItem('token');
    console.log(this.user);
    this.reloadPetList();
    this.GetBaths();
    this.getToday();
  },
  computed: {
    date() {
      return new Date(this.picker).toLocaleDateString('pt-BR', {
        timeZone: 'Europe/Belfast',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
      });
    },
  },
};

</script>
