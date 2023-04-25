import { HashConnect, HashConnectTypes, MessageTypes } from "hashconnect";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setConnectedHederaWalletAddress,
  setHederaWalletStatus,
} from "../../../store/actions/auth.actions";

const env = "mainnet";

export const hc = new HashConnect();

const getPairingData = () => {
  if (hc.hcData.pairingData.length > 0) {
    return hc.hcData.pairingData[hc.hcData.pairingData.length - 1];
  }
};

export const hcInitPromise = new Promise(async (resolve) => {
  const appMetadata = {
    name: "PMX Gaming",
    description: "",
    icon: window.location.origin + "/logo.png",
    url: window.location.origin,
  };
  const initResult = await hc.init(appMetadata, env, true);
  resolve(initResult);
});

export const getProvider = async () => {
  await hcInitPromise;
  const accId = getPairingData()?.accountIds[0];
  const topic = getPairingData()?.topic;
  if (!accId || !topic) {
    throw new Error("No paired account");
  }

  const provider = hc.getProvider(env, topic, accId);
  return provider;
};

export const getSigner = async () => {
  const provider = await getProvider();
  const signer = hc.getSigner(provider);
  return signer;
};

export const HashConnectClient = () => {
  const dispatch = useDispatch();
  const syncWithHashConnect = useMemo(() => {
    return () => {
      const accId = getPairingData()?.accountIds[0];
      if (accId) {
        dispatch(setConnectedHederaWalletAddress(accId));
        dispatch(setHederaWalletStatus(true));
      } else {
        dispatch(setConnectedHederaWalletAddress(""));
        dispatch(setHederaWalletStatus(false));
      }
    };
  }, [dispatch]);

  syncWithHashConnect();
  hcInitPromise.then(() => {
    syncWithHashConnect();
  });
  hc.pairingEvent.on(() => {
    syncWithHashConnect();
  });
  hc.connectionStatusChangeEvent.on(() => {
    syncWithHashConnect();
  });
  return null;
};
