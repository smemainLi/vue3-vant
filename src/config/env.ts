let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = "";
} else if (process.env.NODE_ENV === "production") {
  baseUrl = "";
  /* baseUrl = "http://abit.wyw.com"; */
}

export { baseUrl };
