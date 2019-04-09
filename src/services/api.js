import axios from 'axios';

const price = axios.create({ baseURL: 'https://chain.so/api/v2/get_price' });

export default price;