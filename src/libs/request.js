import axios from 'axios';
import conf from '../configs';

const { backendHost } = conf;

export default axios.create({
    baseURL: backendHost,
    timeout: 1000,
});
