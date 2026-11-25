/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../Api/baseApi";

const applicationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        apply: builder.mutation<any, any>({
            query: ({jobId, data}) => ({
                url: `/application/apply/${jobId}`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["application"],
        }),
    }),
});

export const {
    useApplyMutation
} = applicationApi;
