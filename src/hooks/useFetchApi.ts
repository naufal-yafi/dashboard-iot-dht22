import { useEffect, useRef, useState } from "react";

const useFetchApi = (callback: Function) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [snapshot, setSnapshot]: any[] = useState([]);
  const errorMessage = useRef<string | null>(null);

  const fetching = async () => {
    try {
      const response = await callback();
      setSnapshot(response);
    } catch (error) {
      errorMessage.current = (error as Error).message;
    }
    setLoading(false);
  };

  const updateSnapshot = async () => {
    setLoading(true);
    await fetching();
  };

  useEffect(() => {
    fetching();
  }, []);

  return {
    loading,
    snapshot,
    error: errorMessage.current,
    updateSnapshot,
  };
};

export default useFetchApi;
