import { redirect } from '@sveltejs/kit';
import { jwtDecode } from 'jwt-decode';


export const load = (async ({ cookies, fetch }) => {
  const sessionid = cookies.get('token');

  if (!sessionid) {
    throw redirect(302, '/login')
  }
  const decoded = jwtDecode(sessionid)
  
  const fetchUserData = async (email) => {
    const response = await fetch(`http://localhost:5000/api/v1/get_one_user?email=${email}`)
    const result = await response.json()
    return result.user
  }

  return {
    user: await fetchUserData(decoded.email)
  };

})