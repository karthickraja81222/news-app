import {
    setAddress,
    getNewsFromServer
  } from '../../actions/action';

  export function mapStateToProps(state) {
    return {
      userAddress: state.setUserAddressRootReducer.userAddress,
      newsDataFromAPI: state.setNewsDataRootReducer.newsData
    }
  }

  export const mapDispatchToProps = {
    setAddress,
    getNewsFromServer
  }