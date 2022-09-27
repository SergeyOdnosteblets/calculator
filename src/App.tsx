import React, { useState, useEffect } from 'react';

import { Form } from './components/Form/Form';
import { Results } from './components/Results/Results';

import './App.scss';

export const App = () => {
  const [billAmt, setBillAmt] = useState<number>(0);
  const [numOfPeople, setNumOfPeople] = useState<number>(1);
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(0);
  const [errorOfNumbers, setErrorOfNumbers] = useState<boolean>(false);
  const [activeTip, setActiveTip] = useState()

  const handleBillAmtInput = (e: any) => {
    setBillAmt(e.target.value);
  };

  const handleSelectedTip = (e: any) => {
    setSelectedTip(e.target.value);
  };

  const handleSelectedTipButton = (number: number) => {
    setSelectedTip(number);
  };

  const setNumbersOfPeople = (e: any) => {
    if (e.target.value > 0) {
      setNumOfPeople(e.target.value);
      setErrorOfNumbers(false);
    }
    if (e.target.value == 0) {
      setErrorOfNumbers(true);
      setNumOfPeople(0);
    }
  };

  const calcTip = () => {
    numOfPeople && setCalculatedTip((Number(billAmt) * (selectedTip / 100)) / numOfPeople);
  };

  const calcTotal = () => {
    numOfPeople &&
      setCalculatedTotal(
        Number(billAmt / numOfPeople) + (Number(billAmt) * (selectedTip / 100)) / numOfPeople,
      );
  };

  const reset = () => {
    setBillAmt(0);
    setNumOfPeople(1);
    setSelectedTip(0);
    setCalculatedTip(0);
    setCalculatedTotal(0);
    setErrorOfNumbers(false);
  };

  useEffect(() => {
    calcTip();
    calcTotal();
  }, [billAmt, numOfPeople, selectedTip]);

  return (
    <div className="app">
      <div className="calculator">
        <Form
          handleBillAmtInput={handleBillAmtInput}
          handleSelectedTip={handleSelectedTip}
          handleSelectedTipButton={handleSelectedTipButton}
          billAmt={billAmt}
          setNumbersOfPeople={setNumbersOfPeople}
          numOfPeople={numOfPeople}
          errorOfNumbers={errorOfNumbers}
        />
        <Results calculatedTip={calculatedTip} calculatedTotal={calculatedTotal} reset={reset} />
      </div>
    </div>
  );
};
