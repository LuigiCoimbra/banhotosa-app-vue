<!--eslint-disable max-len-->
<template>
  <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  rounded
                  style="min-width: 37px;"
                  class="pa-1"
                  color="#3DBBDC"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="white">mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
              <v-card-title class="text-h5 purple" style="color: white;">
                Preencha os dados para marcar o banho
              </v-card-title>

              <v-card-text>
                <v-text-field
                  label="Nome do Tutor"
                  v-model="nome_tutor"
                  required
                ></v-text-field>
                <v-text-field
                  label="Nome do Pet"
                  v-model="nome_pet"
                  required
                ></v-text-field>
                <v-text-field
                  label="Raça do Pet"
                  v-model="raca_pet"
                  required
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Item"
                  required
                ></v-select>
                <input
                v-model="data_time"
                type="datetime-local"
                id="date_time"
                name="date_time">
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="secondary"
                  text
                  @click="dialog = false"
                >
                  Fechar
                </v-btn>
                <v-btn
                  color="primary"
                  text
                  @click="agendar()"
                >
                  Agendar
                </v-btn>
              </v-card-actions>
            </v-card>
            </v-dialog>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="servicos"
            :search="search"
          >
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <template v-slot:[`item.status`]="{item}">
              <span>{{ item === "N" ? "Pendente" : "Finalizado" }}</span>
          </template>
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <template v-slot:[`item.date_time`]="{item}">
              <span>{{ item.date_time | fixData }}</span>
          </template>
          </v-data-table>
        </v-card>
      </v-col>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-alert */
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'EventTable',

  data() {
    return {
      user: [],
      dialog: false,
      servicos: [],
      search: '',
      nome_tutor: '',
      nome_pet: '',
      raca_pet: '',
      data_time: '',
      selected: '',
      headers: [
        {
          text: 'Nome do Tutor',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'Nome do Pet', value: 'nome_pet' },
        /* { text: 'Raça', value: 'raca' }, */
        { text: 'Tipo de Serviço', value: 'servico' },
        { text: 'Data e Hora', value: 'date_time' },
        { text: 'Status', value: 'status' },
      ],
      desserts: [
        {
          name: 'Luigi Coimbra',
          nome_pet: 'Yoshi',
          raca: 'Sem raça definida',
          servico: 'Banho e Tosa',
          date_time: '11/12/2021 13:35',
          status: 'Confirmado',
        },
        {
          name: 'Luigi Coimbra',
          nome_pet: 'Yoshi',
          raca: 'Sem raça definida',
          servico: 'Banho e Tosa',
          date_time: '11/12/2021 13:35',
          status: 'Confirmado',
        },
      ],
      select: null,
      items: [
        'Banho + Tosa Higienica',
        'Banho + Tosa',
        'Banho de Ozonio',
      ],
    };
  },
  methods: {
    agendar() {

    },
    async reloadPetInfo() {
      const response = await AuthenticationService.petInfo({
        email: this.user[0],
      });
      console.log(response.data.items);
      if (response.data.items.length > 0) {
        this.servicos = response.data.items.map((item) => ({
          name: item[2],
          nome_pet: item[3],
          servico: item[4],
          date_time: item[1],
          status: item[5],
        }));
      } else {
        alert('Erro ao carregar dados');
      }
      console.log(response.data.item);
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('arrUser'));
    console.log(this.user);
    this.reloadPetInfo();
  },
  filters: {
    // eslint-disable-next-line consistent-return
    fixData(value) {
      console.log(value);
      if (value) {
        const dt = value.split(' ');
        return `${dt[0].substr(0, 2)}/${dt[0].substr(2, 2)}/${dt[0].substr(4, 4)} - ${dt[1]}`;
      }
    },
  },
};
</script>
