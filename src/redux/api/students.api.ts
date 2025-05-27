import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getStudents: build.query({
      query: () => ({
        method: "GET",
        url: "/students",
      }),
      providesTags: ["STUDENTS"],
    }),

    createStudents: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/students",
        body,
      }),
      invalidatesTags: ["STUDENTS"],
    }),

    deleteStudents: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/students/${id}`,
      }),
      invalidatesTags: ["STUDENTS"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetStudentsQuery,
  useCreateStudentsMutation,
  useDeleteStudentsMutation,
} = extendedApi;
