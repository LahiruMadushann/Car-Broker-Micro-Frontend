import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const buyerApi = createApi({
  reducerPath: "buyerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8222/api/v1/" }),
  tagTypes: ["Buyer", "MatchingConditions"],
  endpoints: (builder) => ({
    getAllBuyers: builder.query({
      query: () => "buyer/all",
      providesTags: ["Buyer"],
    }),

    createBuyer: builder.mutation({
      query: (buyerData) => ({
        url: "buyer/create",
        method: "POST",
        body: buyerData,
      }),
      invalidatesTags: ["Buyer"],
    }),

    updateBuyerMatchingConditions: builder.mutation({
      query: ({ buyerId, speciality, matchingConditions }) => ({
        url: `buyer/${buyerId}/${speciality}/matching-conditions`,
        method: "PUT",
        body: matchingConditions,
      }),
      invalidatesTags: ["Buyer", "MatchingConditions"],
    }),

    getMatchingConditions: builder.query({
      query: () => "buyer/matching-conditions",
      providesTags: ["MatchingConditions"],
    }),
  }),
});

export const {
  useGetAllBuyersQuery,
  useCreateBuyerMutation,
  useUpdateBuyerMatchingConditionsMutation,
  useGetMatchingConditionsQuery,
} = buyerApi;
