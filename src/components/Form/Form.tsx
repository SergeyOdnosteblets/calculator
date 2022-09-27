import React from 'react';
import { FormTypes } from '../../types/FormTypes';

import style from './Form.module.scss';
import imgDollar from '../../images/icon-dollar.svg';
import imgPerson from '../../images/icon-person.svg';

export const Form: React.FC<FormTypes> = ({
  handleBillAmtInput,
  handleSelectedTip,
  billAmt,
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
          onInput={handleBillAmtInput}
          value={billAmt}
          className={style.input__error}
        />
        <img src={imgDollar} alt="" className={style.icons} />
      </div>
      <div className={style.select__tip}>
        <label className={style.label}>Selected Tip %</label>
        <div className={style.tip__amount__wrapper}>
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(5)}>
            5%
          </button>
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(10)}>
            10%
          </button>
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(15)}>
            15%
          </button>
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(25)}>
            25%
          </button>
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(50)}>
            50%
          </button>
          <div className={style.tip__amount}>
            <input type="number" className={style.tip__select} onInput={handleSelectedTip} />
          </div>
        </div>
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
