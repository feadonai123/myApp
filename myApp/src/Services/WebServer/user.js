import api from './api';

class User {
  async all() {
    try {
      const response = await api.get('/user');
      return response.data;
    } catch (error) {
      console.log('Failed to get user.', error);
      return [];
    }
  }

  async createOrder({name, description, categorie}) {
    try {
      const data = {
        name: name,
        description: description,
        categorie: categorie,
      }
      const response = await api.post('/orders', data);
      return response.data;
    } catch (error) {
      console.log('Failed to createOrder', error);
      return [];
    }
  }

  async getAllOrders() {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error) {
      console.log('Failed to getAllOrders', error);
      return [];
    }
  }
  async getOrderById(id) {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.log('Failed to getOrderById', error);
      return [];
    }
  }
  async getOrderByIds(ids) {
    try {
      
      const data = {
        ids: ids,
      }
      console.log("pegando ids:")
      console.log(data)
      const response = await api.post(`/orders/getByIds`, data);
      console.log(response.data.orders)
      return response.data.orders;
    } catch (error) {
      console.log('Failed to getOrderById', error);
      return [];
    }
  }
}
export default new User();

