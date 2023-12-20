import api from "@config/api";
import ApiHistory from "@interface/ApiHistory";

export const getAllHistory = async (): Promise<ApiHistory> => {
  const response = await fetch(`${api.url}${api.path.history}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });

  return response.json();
};
