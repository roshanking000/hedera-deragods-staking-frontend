import {
  UPDATE_HEDERA_WALLET_STATUS,
  SET_HEDERA_ADDR,
} from "./action.types";
export const setConnectedHederaWalletAddress = (address) => (dispatch) => {
  dispatch({
    type: SET_HEDERA_ADDR,
    payload: address,
  });
};

export const setHederaWalletStatus = (status) => (dispatch) => {
  dispatch({
    type: UPDATE_HEDERA_WALLET_STATUS,
    payload: status,
  });
};
