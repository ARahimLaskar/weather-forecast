import { useFetchDataQuery, usePostDataMutation } from "../apiSlice";

// custom GET hook
export const useBasicGetApi = ({ path }) => {
  const { data, error, isFetching } = useFetchDataQuery(path);
  return { data, error, isFetching };
};


