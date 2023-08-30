import { useQuery } from "@tanstack/react-query";
import fecthBreedList from "./fecthBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fecthBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
