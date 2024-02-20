import { useState } from 'react';
import './App.css';

import UserInput from './components/UserInput';
import SubmitButton from './components/SubmitButton';
import Container from './components/Container';

function App() {
  const [shipmentId, setShipmentId] = useState();
  const [numOfPallets, setNumOfPallets] = useState();
  const [totalContainerPallets, setTotalContainerPallets] = useState(0);

  function handleIdChange(event: any) {
    setShipmentId(event.target.value);
  }

  function handleNumOfPalletsChange(event: any) {
    setNumOfPallets(event.target.value);
  }

  function handleOnClick() {
    setTotalContainerPallets((prev) => prev + parseInt(numOfPallets!));
    console.log(totalContainerPallets);
  }

  return (
    <>
      <div>Add Shipment</div>
      <UserInput
        placeHolderText="Shipment ID"
        type="text"
        onChange={handleIdChange}
      ></UserInput>
      <UserInput
        placeHolderText="# of Pallets"
        type="number"
        onChange={handleNumOfPalletsChange}
      ></UserInput>
      <SubmitButton
        shipmentId={shipmentId}
        numOfPallets={numOfPallets}
        onClick={handleOnClick}
      ></SubmitButton>
      <Container
        visibility={totalContainerPallets < 1 ? 'hidden' : 'visible'}
        shipmentId={shipmentId}
        numOfPallets={totalContainerPallets}
      ></Container>
    </>
  );
}

export default App;
