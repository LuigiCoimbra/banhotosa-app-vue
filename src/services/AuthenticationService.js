import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  recover(email) {
    return Api().post('recovery-password', email);
  },
  getAvailableDate(selDate) {
    return Api().get('/appointments/schedules', selDate);
  },
  sendAppointment(agendamento) {
    return Api().post('/appointments', agendamento);
  },
  petList() {
    return Api().get('/users/pets');
  },
  getBaths() {
    return Api().get('/baths');
  },
  petRaca() {
    return Api().post('petRaca');
  },
  savePet(credentials) {
    return Api().post('savePet', credentials);
  },
};
