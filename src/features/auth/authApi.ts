import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRequestBody, AuthResponseBody } from './authApi.types';
import {
  AUTH,
  BASE_URL,
  LOGIN,
  REGISTER,
  ACCESS_TOKEN,
  LOGOUT,
} from '@/store/endpoints';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + AUTH,
    credentials: 'include',
  }),
  endpoints: builder => ({
    login: builder.mutation<AuthResponseBody, AuthRequestBody>({
      query: body => ({
        url: LOGIN,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<AuthResponseBody, AuthRequestBody>({
      query: body => ({
        url: REGISTER,
        method: 'POST',
        body,
      }),
    }),
    getNewTokens: builder.mutation<AuthResponseBody, void>({
      query: () => ({
        url: ACCESS_TOKEN,
        method: 'POST',
      }),
    }),
    logout: builder.mutation<AuthResponseBody, void>({
      query: () => ({
        url: LOGOUT,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetNewTokensMutation,
  useLogoutMutation,
} = authApi;
