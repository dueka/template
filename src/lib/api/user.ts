import config from "../../config";
import { client } from "../client";

async function login(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/access/auth`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

async function getUsers() {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/list-paginated/0/10`,
    "GET"
  );
  return response;
}

async function validateLink(options: { queryKey: any }) {
  const token = options.queryKey[1];
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/access/valid-reset-link?token=${token}`,
    "GET"
  );
  return response;
}

async function validateSignupLink(options: { queryKey: any }) {
  const token = options.queryKey[1];
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/access/valid-link?token=${token}`,
    "GET"
  );
  return response;
}

async function inviteUsers(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/access/iv`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

async function signUp(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/reg`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

async function toggleUserActivation(pk: Number) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/toggle/${pk}`,
    "PUT",
    {}
  );
  return response;
}

async function completeSignup(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/reg-complete`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

async function resetPassword(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/pwd-reset`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

async function forgotPassword(payload: any) {
  const response = await client<any>(
    `${config.API_ENDPOINT}/user/access/forgot-pwd`,
    "POST",
    {
      body: payload
    }
  );
  return response;
}

export {
  getUsers,
  login,
  inviteUsers,
  forgotPassword,
  validateLink,
  resetPassword,
  validateSignupLink,
  signUp,
  completeSignup,
  toggleUserActivation
};
