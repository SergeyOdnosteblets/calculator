import React from 'react';
import { FormTypes } from '../../types/FormTypes';

import style from './Form.module.scss';
import imgDollar from '../../images/icon-dollar.svg';
import imgPerson from '../../images/icon-person.svg';
import { Tips } from '../Tips/Tips';

export const Form: React.FC<FormTypes> = ({
  handleBillAmountInput,
  handleSelectedTip,
  billAmount,
  handleSelectedTipButton,
  setNumbersOfPeople,
  numOfPeople,
  errorOfNumbers,
}) => {
  return (
    <div className={style.form}>
      <div className={style.label__group}>
        <label className={style.label}>Bill</label>
        <input
          type="number"
          id="bill"
          onInput={handleBillAmountInput}
          value={billAmount}
          className={style.input__error}
        />
        <img src={imgDollar} alt="" className={style.icons} />
      </div>
      <div className={style.select__tip}>
        <label className={style.label}>Selected Tip %</label>
        <Tips
          handleSelectedTipButton={handleSelectedTipButton}
          handleSelectedTip={handleSelectedTip}
        />
      </div>
      <div className={style.label__group}>
        <div>
          <label className={style.label}>Numbers of People</label>
          {errorOfNumbers && <label className={style.error}>Can't be zero</label>}
        </div>
        <input
          className={style.input__error}
          type="number"
          id="people"
          onInput={setNumbersOfPeople}
          value={numOfPeople}
        />
        <img src={imgPerson} alt="" className={style.icons} />
      </div>
    </div>
  );
};
