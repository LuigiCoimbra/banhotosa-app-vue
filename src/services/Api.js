import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://tudodebicho-app07.cldns.top/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
