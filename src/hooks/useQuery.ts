import axios from "axios";
import { useEffect, useState } from "react";

export const useQuery = (path: string, options?: {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let loadingTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Finish loading");
    }, 500);
  });

  async function handleFetchData() {
    try {
      setLoading(true);
      const url =
        import.meta.env.VITE_BASE_URL +
        path +
        "?api_key=" +
        import.meta.env.VITE_API_KEY;

      // Make API take at least 500ms to get the result to clearly see the Spinner
      const response = await Promise.all([
        loadingTime,
        axios.get(url, options),
      ]);
      console.log(data);
      setData(response[1].data);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetchData();
  }, [path, options]);

  return { data, isLoading, error, handleFetchData };
};
