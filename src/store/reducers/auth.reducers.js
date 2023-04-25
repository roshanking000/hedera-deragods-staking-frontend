import {
  UPDATE_HEDERA_WALLET_STATUS,
  SET_HEDERA_ADDR,
} from "../actions/action.types";

const auth = {
  hederaWalletStatus: false,
  hederaWallet: "",
};

export function Auth(state = auth, action) {
  switch (action.type) {
    case SET_HEDERA_ADDR:
      return {
        ...state,
        hederaWallet: action.payload,
      };
    case UPDATE_HEDERA_WALLET_STATUS:
      return {
        ...state,
        hederaWalletStatus: action.payload,
      };
    default:
      return { ...state };
  }
}
