import { useSearchParams } from "next/navigation";

const useQueryString = (query: string) => {
  const searchParams = useSearchParams();

  const search = searchParams.get(query);

  return search;
};
export default useQueryString;
