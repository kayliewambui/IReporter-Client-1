const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : process.env.REACT_APP_BACKEND_URL;

export default BASE_URL;
