import Cookies from 'js-cookie';

export function getUserData() {
  const userDataString = Cookies.get('userData');
  console.log('userData cookie: ', userDataString)
  return JSON.stringify(userDataString)
}
