import { baseApi } from "../../Api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllActiveJobs: builder.query({
      query: ({
        keyword,
        department,
        workMode,
        limit,
        page,
        skip,
        category,
      }: {
        keyword?: string;
        department?:string;
        workMode?:string;
        limit?: number;
        page?: number;
        skip?: number;
        category?: string;
      } = {}) => {
        const params = new URLSearchParams();

        // Handle keyword - skip if "All"
        if (keyword && keyword !== "All") {
          params.append("keyword", keyword);
        }
        if (department && department !== "All") {
          params.append("department", department);
        }
        if (workMode && workMode !== "All") {
          params.append("workMode", workMode);
        }

        // Handle limit
        if (typeof limit === "number") params.append("limit", limit.toString());

        // Handle page
        if (typeof page === "number") params.append("page", page.toString());

        // Handle skip
        if (typeof skip === "number") params.append("skip", skip.toString());

        // Handle category - skip if "All" or empty
        if (category && category !== "All") {
          params.append("category", category);
        }

        return {
          url: `/job/active?${params.toString()}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["job"],
    }),

    getSingleJobByJobId: builder.query({
      query: (id) => ({
        url: `/job/custom/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["job"],
    }),
  }),
});

export const {
  useGetAllActiveJobsQuery,
  useGetSingleJobByJobIdQuery,
} = jobApi;
