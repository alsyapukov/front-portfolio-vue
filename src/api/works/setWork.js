import HTTP from "../http-common";

export default payload => {
  let objectData = new FormData();
  payload.images.map((img, i) => {
    objectData.append(`media`, img || "");
  })
  objectData.append(`title`, payload.title);
  objectData.append(`miniDescription`, payload.miniDescription);
  objectData.append(`description`, payload.description);

  // console.log(payload.images);

  return HTTP.post("works/postWork", objectData, {
    headers: {
      // "api-version": 1.8 // Если указать версию, то будет минимум данных
    },
    cache: false
  });
};
