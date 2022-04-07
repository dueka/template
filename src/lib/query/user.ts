import { useMutation, useQuery } from "react-query";
import { ListOfUsersResponse } from "../../interfaces/users";
import * as users from "../api/user";

function useLogin(options = {}) {
  return useMutation(users.login, options);
}

function useResetPassword(options = {}) {
  return useMutation(users.resetPassword, options);
}

function useSignup(options = {}) {
  return useMutation(users.signUp, options);
}

function useCompleteSignup(options = {}) {
  return useMutation(users.completeSignup, options);
}

function useToggleUserActivation(options = {}) {
  return useMutation(users.toggleUserActivation, options);
}

function useValidateSignupLink(token: string, options: {}) {
  const { data, status } = useQuery<any>(
    ["validate-singup-link", token],
    users.validateSignupLink,
    {
      ...options,
      retry: false
    }
  );

  return { data, status };
}

function useForgotPassword(options = {}) {
  return useMutation(users.forgotPassword, options);
}

function useInviteUser(options = {}) {
  return useMutation(users.inviteUsers, options);
}

function useGetUsers(options: {}) {
  const { data, status, error } = useQuery<ListOfUsersResponse>(
    ["users"],
    users.getUsers,
    {
      keepPreviousData: true,
      ...options
    }
  );

  return { data, status, error };
}

function useValidateLink(token: string, options: {}) {
  const { data, status } = useQuery<any>(
    ["validate-link", token],
    users.validateLink,
    {
      ...options,
      retry: false
    }
  );

  return { data, status };
}

export {
  useGetUsers,
  useLogin,
  useInviteUser,
  useForgotPassword,
  useValidateLink,
  useResetPassword,
  useValidateSignupLink,
  useSignup,
  useCompleteSignup,
  useToggleUserActivation
};
