import { ethers } from "ethers";
import { useEffect, useState } from "react";

async function getReverseDomain(address) {
  try {
    const provider = ethers.providers.getDefaultProvider();
    const name = await provider.lookupAddress(address);
    return name;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const useReverseDomain = (address, domain) => {
  if (domain) return domain;
  const [reverseDomain, setReverseDomain] = useState(null);
  useEffect(() => {
    getReverseDomain(address).then((domain) => {
      setReverseDomain(domain);
    });
  }, [address]);
  return reverseDomain;
};
