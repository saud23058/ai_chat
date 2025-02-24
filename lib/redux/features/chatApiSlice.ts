import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApiSlice = createApi({
  reducerPath: "aiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    prompt: builder.mutation({
      query: (prompt) => ({
        url: "api/chat",
        method: "POST",
        body: { prompt: prompt },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { usePromptMutation } = chatApiSlice;