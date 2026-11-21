/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../Api/baseApi";

const discoveryCallApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookDiscoveryCall: builder.mutation<any, any>({
      query: (data) => ({
        url: `/discovery-call/book`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["discoveryCall"],
    }),
  }),
});

export const {
  useBookDiscoveryCallMutation
} = discoveryCallApi;
