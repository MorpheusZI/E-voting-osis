"use server"
import Cookies from 'js-cookie';

export async function waitForCookie(cookieName:any, maxAttempts = 10, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const checkCookie = () => {
      const cookieValue = Cookies.get(cookieName);
      if (cookieValue !== undefined) {
        resolve(cookieValue);
      } else if (attempts >= maxAttempts) {
        reject(new Error('Cookie not available after max attempts.'));
      } else {
        attempts++;
        setTimeout(checkCookie, delay);
      }
    };
    checkCookie();
  });
}
