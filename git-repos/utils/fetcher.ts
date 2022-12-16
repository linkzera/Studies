import axios from "axios";

export const fetcher = async (url: string) => {
  const data = axios
    .get(url, {
      headers: {
        Authorization: `token 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`,
      },
    })
    .then((res) => res.data);
  return data;
};
