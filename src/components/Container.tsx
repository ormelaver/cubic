import { useEffect, useState } from 'react';

export default function Container({ shipmentId, numOfPallets }: any) {
  const [numOfContainers, setNumOfContainers] = useState(0);
  const [totalPallets, setTotalPallets] = useState(0);

  function setContainerId() {
    if (totalPallets > 20) {
      setNumOfContainers((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setTotalPallets((prev) => prev + numOfPallets);
    setContainerId();
  });

  return (
    <ul>
      <li>
        <div>Container {numOfContainers + 1}</div>
        <div>{shipmentId}</div>
        <div>{numOfPallets}</div>
      </li>
    </ul>
  );
}
