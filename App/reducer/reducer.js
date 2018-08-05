
const userAddress = {
  userAddress: ""
}
const newsData = {
  newsData: null
}

export function setUserAddressReducer(state = userAddress, action) {
  console.log("inside reducer: ", action.payload)
  switch (action.type) {
    case "SET_USER_ADDRESS":

      return Object.assign({}, state, { userAddress: action.payload })
    default:
      return state;
  }
}




export function setNewsDataReducer(state = newsData, action) {
  console.log("inside reducer: ", action.payload)
  switch (action.type) {
    case "GET_NEWS_DATA_SUCCESS":
      return Object.assign({}, state, { newsData: action.payload })
    case "GET_NEWS_DATA_FAILURE":
      return Object.assign({}, state, { newsData: action.payload })
    default:
      return state;
  }
}
