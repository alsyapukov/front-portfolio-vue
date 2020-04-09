import HTTP from "../http-common";

/**
 * Получение работ
 *
 * @module getWork
 * @return {object} Promise
 */
export default (data) => {
  return HTTP.get("works/getWork", {
    params: {
      // source_content_type: 'application/json',
      // source: JSON.stringify({id: data.id}),
      id: data.id
    },
    headers: {
    },
    cache: false
  });
}
  
