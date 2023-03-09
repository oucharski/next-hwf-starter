import axios from "axios";

export const getHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
});

export const fetcherWithToken = async (url: string, token: string) => {
  if (token) {
    const headers = getHeaders(token);
    const res = await axios
      .get(url, { headers })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);
        return { data: "" };
      });
    return res.data;
  }
  return;
};

export const fetcherBlobWithToken = async (
  url: string,
  token: string
): Promise<string> => {
  if (token && typeof window !== "undefined") {
    const headers = getHeaders(token);
    const res = await axios
      .get(url, { headers, responseType: "blob" })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);
        return { data: "" };
      });

    const _url = window.URL || window.webkitURL;
    const blobUrl = _url.createObjectURL(res.data);
    return blobUrl;
  }

  return "";
};
