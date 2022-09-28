import { TipTypes } from '../../types/TipTypes';

import style from './Tips.module.scss';

const percents = [5, 10, 15, 25, 50];

export const Tips: React.FC<TipTypes> = ({ handleSelectedTipButton, handleSelectedTip }) => {
  return (
    <div className={style.tip__amount__wrapper}>
      {percents.map((item) => {
        return (
          <button className={style.tip__btn} onClick={() => handleSelectedTipButton(item)}>
            {item}%
          </button>
        );
      })}
      <input type="number" className={style.tip__select} onInput={handleSelectedTip} />
    </div>
  );
};
