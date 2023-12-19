import ApiHistory from "@interface/ApiHistory";

export const getAllHistory = async (): Promise<ApiHistory> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/history-alert`,
    {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    },
  );

  return response.json();
};
