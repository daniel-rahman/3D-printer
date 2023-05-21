import { useCallback } from "react";

interface Url {
  BASE_URL: string,
  MOVE_URL: string,
  CANCEL_URL: string,
  [key: string]: string; // Index signature

}

const url:Url = {
  BASE_URL: "http://localhost:8080/api/v1/jobs/",
  MOVE_URL: "http://localhost:8080/api/v1/jobs/move/",
  CANCEL_URL: "http://localhost:8080/api/v1/jobs/cancel/",
}

interface sendRequestProps {
  params: {},
  body?: string,
  method: string,
  type:string,
}

const useFetch = () => {
  const sendRequest = useCallback(async (requestConfig: sendRequestProps) => {
    const { method, params, body ,type } = requestConfig;

    let requestedUrl = `${url[`${type}_URL`]}?${new URLSearchParams(params)}`;

    let config: RequestInit = {
      method: method,
    };

    if (method === "GET" || method === "HEAD") {
      requestedUrl += body ? `?${new URLSearchParams(body)}` : "";
    } else {
      config.headers = {
        "Content-Type": "application/json",
      };
      config.body = JSON.stringify(body);
    }

    const response = await fetch(requestedUrl, config);

    if (!response.ok) {
      console.log("Request failed!")
      //throw new Error("Request failed!");
    }
    console.log(response)

    let data;
    try {
      data = await response.json();
    } catch (error) {
      data = [];
      // throw new Error("Invalid JSON response");
    }

    return data;
  }, []);

  return { sendRequest };
};

export default useFetch;
