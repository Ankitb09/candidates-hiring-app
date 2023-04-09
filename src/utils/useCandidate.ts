import { useEffect, useState } from "react";
import { Candidate } from "../@types/Candidate";

export const BASE_PATH = "https://personio-fe-coding-challenge.vercel.app/api";

const useCandidate = () => {
  const [candidates, setCandidates] = useState<Array<Candidate>>([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setIsLoader] = useState(false);

  const fetchCandidates = async () => {
    try {
      setIsLoader(true);
      const response = await fetch(`${BASE_PATH}/candidates`);
      if (!response.ok) {
        // make the promise be rejected if we didn't get a 2xx response
        throw new Error("Not 2xx response", { cause: response });
      } else {
        const candidates = await response.json();

        if (candidates.error) {
          setIsError(true);
          setError(candidates.error);
        } else {
          setIsError(false);
          setCandidates(candidates.data);
        }
      }

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return {
    candidates,
    isError,
    error,
    isLoading,
  };
};

export default useCandidate;
