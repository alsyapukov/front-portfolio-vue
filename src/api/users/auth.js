import HTTP from "../http-common";

export default payload => {
  return HTTP.post("users/signIn", payload, {
    headers: {
      // "api-version": 1.8 // Если указать версию, то будет минимум данных
    },
    cache: false
  });
};
