import $axios from '../axios.instance';

export const getCartList = async () => {
  return await $axios.post('/cart/list', {
    page: 1,
    limit: 10,
  });
};
