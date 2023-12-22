import api from "@config/api";
import HistoryModel from "@model/HistoryModel";

export const getAllHistory = async (): Promise<HistoryModel> => {
  const response = await fetch(`${api.url}${api.path.history}`, {
    cache: "no-cache",
    next: {
      revalidate: 25,
    },
  });

  return response.json();
};

export const addHistory = async (
  request: HistoryModel,
): Promise<HistoryModel> => {
  const response = await fetch(`${api.url}${api.path.history}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return response.json();
};
