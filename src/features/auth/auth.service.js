import {sendPostReq} from '../../utils/request'

export async function registerUser({ email, name, password }) {
  try {
    await sendPostReq("auth/register",{ email, name, password });
  } catch (error) {
    console.error(error);
    
  }
}
