import axios, { AxiosRequestConfig } from "axios";
import { ApiHeader, OptionsArgs } from "../interfaces/client";
import { decrypt_key, encrypt_key, handle_logout } from "../utils/auth-util";
import { loginKey, tempKey } from "../utils/constants";
import storage from "../utils/storage";

export type DefaultResponse = Record<string, unknown>;

/** Axios interceptors to transform error message for clientFn */
axios.interceptors.response.use(
  function (response) {
    const jwt = response.headers?.authorization;
    const pathName: string = window.location.pathname;
    if (jwt) {
      const encrypted_token = encrypt_key(jwt);
      if (pathName.includes("forgot-password")) {
        storage.remove(loginKey);
        storage.set(tempKey, encrypted_token);
      } else if (pathName.includes("verify-signup")) {
        storage.remove(loginKey);
        storage.set(tempKey, encrypted_token);
      } else {
        storage.remove(tempKey);
        storage.set(loginKey, encrypted_token);
      }
    }
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      handle_logout();
    }
    const errorMessage = error?.response?.data?.message;

    return Promise.reject(errorMessage || "Something went wrong. Try again");
  }
);

export async function client<ResponseType>(
  endpoint: string,
  method?: any,
  { body, headers: customHeaders, ...customConfig }: OptionsArgs = {}
) {
  const encrypted_token = storage.get(loginKey);
  const encrypted_temp_token = storage.get(tempKey);
  let token = "";
  let tempToken = "";

  if (encrypted_token) {
    token = decrypt_key(encrypted_token);
  }
  if (encrypted_temp_token) {
    tempToken = decrypt_key(encrypted_temp_token);
  }

  const headers: ApiHeader = {
    "Content-type": "application/json; charset=UTF-8"
  };

  if (token || tempToken) headers.Authorization = tempToken ? tempToken : token;

  const bodyPayload: any = { ...body };

  const params: AxiosRequestConfig = {
    method: method || "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders
    }
  };

  if (body) params.data = JSON.stringify(bodyPayload);

  let response: ResponseType;
  const { data } = await axios(`${endpoint}`, params);

  if (data?.data) {
    const { data: resolvedResponse } = data;
    response = resolvedResponse;
  } else {
    response = data;
  }

  return response;
}
