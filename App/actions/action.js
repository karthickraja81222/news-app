import { getNewsDataFromServer } from "../services/APIHandler"
export function setAddress(address) {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_USER_ADDRESS",
      payload: address
    })
  }
}

export function getNewsFromServer() {
  return (dispatch, getState) => {
    getNewsDataFromServer()
      .then((res) => {
        console.log("res is: ", JSON.parse(res._bodyText));

        dispatch({
          type: "GET_NEWS_DATA_SUCCESS",
          payload: JSON.parse(res._bodyText).articles
        })

      })
      .catch((err) => {
        console.log("err is: ", err);
        return (dispatch, getState) => {
          dispatch({
            type: "GET_NEWS_DATA_FAILURE",
            payload: err
          })
        }
      })
  }
}