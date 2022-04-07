<!-- eslint-disable no-return-assign -->
<!-- eslint-disable no-unused-expressions -->
<!-- eslint-disable max-len -->
<style scoped>
.v-text-field--outlined >>> fieldset {
  border: 2px solid #940CC4;
}
</style>
<template>
  <v-col cols="12" class="pa-0">
        <v-card
        width="100vw"
        height="100vh"
        style="display: flex; justify-content: center; align-items: center; font-family: 'Nunito', sans-serif;"
        v-if="this.servicos.length == 0">
          <v-card width="85%" style="display: grid; justify-content: center; align-items: center;">
            <v-card-title style="font-size: 20px; text-align: center; font-weight: bold; color: #940CC4">Você ainda não tem nenhum bichinho cadastrado!</v-card-title>
            <v-card-actions class="mx-5" style="display: flex; justify-content: center; align-items: center;">
            <v-btn
              class="mb-1"
              style="border-radius: 50px; border: 1px solid #940CC4; font-weight: bold; text-transform: none; font-size: 16px;"
              text
              color="#940CC4"
              width="100%"
              @click="dialog3 = false"
              >
                <span>Adicionar Novo Bichinho</span>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-card>
        <v-card class="pa-2 mb-15" style="display: grid; justify-content: center; align-items: center;"
        v-else>
          <v-card-title style="display: flex; justify-content: center; align-items: center; color: #940CC4 !important; font-weight: bold; font-family: 'Nunito', sans-serif;">
            Meus bichos
          </v-card-title>
          <v-card
          v-for="(pet, i) in servicos"
          :key="i"
          class="mt-5 pa-2"
          style=" font-family: 'Nunito', sans-serif; display: flex; justify-content: center; align-items: center; border: 1px solid #940CC4; gap: 40px; border-radius: 20px"
          @click.stop="dialog2 = true"
          >
            <v-avatar>
              <v-img src="../assets/dog_icon.png"></v-img>
            </v-avatar>
            <div style="display: grid; justify-content: center; align-items: center;">
              <v-card-title>{{ pet.nome_pet }}</v-card-title>
              <v-card-subtitle>{{ pet.tipo_pet }}</v-card-subtitle>
            </div>
            <v-card-actions style="display: grid; justify-content: center; align-items: center;">
              <v-btn @click.stop="saveIndex = i; dialog2 = true;" color="#940CC4" icon><v-icon>mdi-square-edit-outline</v-icon></v-btn>
              <v-btn @click.stop="dialog3 = true" color="#940CC4" icon class="ml-0"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
            </v-card-actions>
          </v-card>
          <v-card-actions class="mx-5" style="display: flex; justify-content: center; align-items: center;">
            <v-btn
              class="mb-1"
              style="border-radius: 50px; border: 1px solid #940CC4; font-weight: bold; text-transform: none; font-size: 16px;"
              text
              color="#940CC4"
              width="100%"
              @click="dialog = true"
              >
                <span>Adicionar Novo Bichinho</span>
            </v-btn>
          </v-card-actions>
          <v-dialog
              v-model="dialog"
              width="500"
            >
            <v-card style="display: grid; justify-content: center; align-items: center; justify-items: center">
              <v-card-title class="text-h5" style="color: #940CC4; text-align: center; font-size: 20px !important; font-family: 'Nunito', sans-serif;">
                Informe os dados do<br>seu bichinho
              </v-card-title>

              <v-card-text>
                <v-text-field
                  label="Nome do Bichinho"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="nome_pet"
                  required
                ></v-text-field>
                <v-text-field
                  label="Espécie"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="tipo_pet"
                  required
                ></v-text-field>
                <v-text-field
                  label="Raça"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="raca_pet"
                  required
                ></v-text-field>
                <div style="display: flex">
                  <v-text-field
                  label="Data de Nascimento"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="nascimento_pet"
                  required
                  ></v-text-field>
                  <v-text-field
                  label="Peso"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="peso_pet"
                  required
                  ></v-text-field>
                </div>
                <v-text-field
                  label="Porte"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="porte"
                  required
                ></v-text-field>
                <v-textarea
                  label="Precisa de cuidados especiais? Quais?"
                  style="background: #FFF; border-radius: 20px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="peso_pet"
                  required
                ></v-textarea>
                <!-- <v-autocomplete
                  v-model="raca_pet"
                  :items="pet_info"
                  item-text="tipoRaca"
                  item-value="codraca"
                  :rules="[v => !!v || 'Item is required']"
                  label="Raça do Pet"
                  required
                ></v-autocomplete> -->
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
                  @click="savePetInfo"
                >
                  Agendar
                </v-btn>
              </v-card-actions>
            </v-card>
            </v-dialog>
            <v-dialog
            v-model="dialog2"
            width="500">
            <v-card style="display: grid; justify-content: center; align-items: center; justify-items: center">
              <v-card-title class="text-h5" style="color: #940CC4; text-align: center; font-size: 20px !important; font-family: 'Nunito', sans-serif;">
                Informe os dados do<br>seu bichinho
              </v-card-title>

              <v-card-text>
                <v-text-field
                  label="Nome do Bichinho"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="servicos[saveIndex].nome_pet"
                  required
                ></v-text-field>
                <v-text-field
                  label="Espécie"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="servicos[saveIndex].tipo_pet"
                  required
                ></v-text-field>
                <v-text-field
                  label="Raça"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="servicos[saveIndex].raca_pet"
                  required
                ></v-text-field>
                <div style="display: flex">
                  <v-text-field
                  label="Data de Nascimento"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="nascimento_pet"
                  required
                  ></v-text-field>
                  <v-text-field
                  label="Peso"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="servicos[saveIndex].peso_pet"
                  required
                  ></v-text-field>
                </div>
                <v-text-field
                  label="Porte"
                  style="background: #FFF; border-radius: 50px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="porte"
                  required
                ></v-text-field>
                <v-textarea
                  label="Precisa de cuidados especiais? Quais?"
                  style="background: #FFF; border-radius: 20px;"
                  class="mb-2"
                  outlined
                  hide-details
                  v-model="peso_pet"
                  required
                ></v-textarea>
                <!-- <v-autocomplete
                  v-model="raca_pet"
                  :items="pet_info"
                  item-text="tipoRaca"
                  item-value="codraca"
                  :rules="[v => !!v || 'Item is required']"
                  label="Raça do Pet"
                  required
                ></v-autocomplete> -->
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="secondary"
                  text
                  @click="dialog2 = false"
                >
                  Fechar
                </v-btn>
                <v-btn
                  color="primary"
                  text
                  @click="savePetInfo"
                >
                  Agendar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog3">
            <v-card style="display: grid; justify-content: center; align-items: center; font-family: 'Nunito', sans-serif;">
              <v-card-title style="font-size: 20px; text-align: center; font-weight: bold; color: #940CC4">Deseja mesmo excluir esse bichinho?</v-card-title>
              <v-card-subtitle style="font-size: 12px; text-align: center; color: #000000;">Essa ação apagará todos os dados vinculados a este pet.</v-card-subtitle>
              <v-card-actions>
                <v-btn
                class="mb-1"
                style="border-radius: 50px; background: #940CC4; font-weight: bold; text-transform: none; font-size: 16px;"
                text
                color="white"
                width="50%"
                @click="dialog3 = false"
                >
                  <span>Excluir</span>
                </v-btn>
                <v-btn
                class="mb-1"
                style="border-radius: 50px; border: 1px solid #940CC4; font-weight: bold; text-transform: none; font-size: 16px;"
                text
                color="#940CC4"
                width="50%"
                @click="dialog3 = false"
                >
                  <span>Cancelar</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
</template>
<!-- <template v-slot:[`item.date_time`]="{item}">
              <span>{{ item.date_time | fixData }}</span>
          </template>
          :items="servicos"
           -->
<script>
/* eslint-disable no-console */
/* eslint-disable no-alert */
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'MyPets',

  data() {
    return {
      activePicker: null,
      date: '',
      date2: '',
      dateFormatted: '',
      menu: false,
      user: [],
      saveIndex: 0,
      dialog: false,
      dialog2: false,
      dialog3: false,
      servicos: [],
      pet_info: [],
      search: '',
      nome_tutor: '',
      codparc: '',
      nome_pet: '',
      raca_pet: null,
      peso_pet: '',
      tipo_pet: '',
      codraca: null,
      tipoRaca: '',
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
        { text: 'Raça', value: 'raca_pet' },
        { text: 'Peso', value: 'peso_pet' },
        { text: 'Nascimento', value: 'nascimento_pet' },
      ],
      select: null,
      items: [
        'Banho + Tosa',
        'Banho de Ozonio',
      ],
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    menu(val) {
      // eslint-disable-next-line no-unused-expressions
      val && setTimeout(() => { this.activePicker = 'YEAR'; });
    },
    // eslint-disable-next-line no-unused-vars
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    load() {
      this.date = new Date().toISOString().substr(0, 10);
      // eslint-disable-next-line no-undef
      this.dateFormatted = formatDate(new Date().toISOString().substr(0, 10));
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
    async savePetInfo() {
      const response = await AuthenticationService.savePet({
        nome: this.nome_pet,
        peso: this.peso_pet,
        nascimento: this.date,
        codraca: this.raca_pet,
        codparc: this.servicos[0].codparc,
      });
      console.log(response);
      // this.$router.push('/login');
    },
    async petRacaInfo() {
      const response = await AuthenticationService.petRaca();
      console.log(response.data.items);
      if (response.data.items.length > 0) {
        this.pet_info = response.data.items.map((item) => ({
          codraca: item[0],
          tipoRaca: item[1],
        }));
      } else {
        alert('Erro ao carregar dados');
      }
      console.log(this.pet_info);
    },
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
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('arrUser'));
    console.log(this.user);
    this.reloadPetList();
    this.petRacaInfo();
    // eslint-disable-next-line no-undef
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
<!-- ||
campo1 || campo2  as nome
campo1 || ' - ' ||campo2  as nome -->
