'use server';
import API from '@/services/axios';

export const register = async (body: any) => {
  try {
    let res = await API.post('/register', body);
    console.log('response', res);
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
