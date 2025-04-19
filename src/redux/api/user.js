import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
      reducerPath: 'userAPI',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
      endpoints: (builder) => ({
          getAllUsers: builder.query({
              query: () => `/users`
          })
      })

});

console.log('userApi',userApi)
export const { useGetAllUsersQuery } = userApi;