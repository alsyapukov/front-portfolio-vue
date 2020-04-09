import HTTP from "../http-common";

export default payload => {
  console.log(payload)
  return HTTP.post("techs/setTech", payload, {
    headers: {
      // "api-version": 1.8 // Если указать версию, то будет минимум данных
    },
    cache: false
  });
};
