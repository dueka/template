import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
// CryptoJS.enc.Base64.stringify(encodedWord);
import { ENCRYPTION_KEY } from "./constants";
import storage from "./storage";

export const encrypt_key = (token: any) => {
  const encryptedToken = aes.encrypt(token, ENCRYPTION_KEY).toString();

  return encryptedToken;
};

export const decrypt_key = (token: any) => {
  const decryptedToken = aes.decrypt(token, ENCRYPTION_KEY);
  return decryptedToken.toString(enc);
};

export const encrypt_userobj = (user: any) => {
  const encryptedUser = aes
    .encrypt(JSON.stringify(user), ENCRYPTION_KEY)
    .toString();

  return encryptedUser;
};

export const decrypt_user0bj = (user: any) => {
  if (user) {
    const decryptedUser = aes.decrypt(user, ENCRYPTION_KEY);
    return JSON.parse(decryptedUser.toString(enc));
  } else {
    return "";
  }
};

export const handle_logout = () => {
  storage.clear();
  window.location.reload();
  window.location.replace("/");
};

export const checkRole = (roles: string[] = []) => {
  let role = "";
  if (roles.length > 0 && roles.includes("admin")) {
    role = "admin";
  }

  if (roles.length > 0 && roles.includes("agent")) {
    role = "agent";
  }

  return role;
};
