import axios from "axios";
const url = "http://211.240.103.78:8081";

function post_form_api(data) {
  const promise = axios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const datapromise = promise.then((response) => response.data);
  console.log("=", datapromise);
  return datapromise;
}

function get_api(data) {
  let result = axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("ok!", response);
      result = response;
      // 응답 처리
    })
    .catch((error) => {
      console.log("error!", error);
      // 예외 처리
    });

  return result;
}
export { post_form_api, get_api };
