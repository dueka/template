export const handleAxiosError = (error: any) => {
  // const history = createBrowserHistory();

  let data = { config: error.config, message: "", status: "", headers: "" };
  if (error.response) {
    if (error.response.status === 404) {
      data = {
        ...data,
        message: "No data returned",
        status: error.response.status,
        headers: error.response.headers
      };
      return data;
    }

    if (error.response.status === 400) {
      data = {
        ...data,
        message: error.response.data.message,
        status: error.response.status,
        headers: error.response.headers
      };

      return data;
    }

    if (error.response.status === 401) {
      data = {
        ...data,
        message: error.response.data.message,
        status: error.response.status,
        headers: error.response.headers
      };

      return data;
    }

    if (error.response.status === 500) {
      data = {
        ...data,
        message: error.response.data.message,
        status: error.response.status,
        headers: error.response.headers
      };

      return data;
    }

    data = {
      ...data,
      message: error.message,
      status: error.response.status,
      headers: error.response.headers
    };
    return data;
  }
};
