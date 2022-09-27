import { ResultsTypes } from '../../types/ResultsType';
import style from './Results.module.scss';

export const Results: React.FC<ResultsTypes> = ({ calculatedTip, calculatedTotal, reset }) => {
  return (
    <div className={style.results}>
      <div className={style.results__info}>
        <div className={style.amount}>
          <div className={style.amount__info}>
            <div className={style.header}>Tip Amount</div>
            <div className={style.person}>/ person</div>
          </div>
          <div className={style.value}>
            <p>${`${calculatedTip.toFixed(2)}`}</p>
          </div>
        </div>
        <div className={style.amount}>
          <div className={style.amount__info}>
            <div className={style.header}>Total</div>
            <div className={style.person}>/ person</div>
          </div>
          <div className={style.value}>
            <p>${`${calculatedTotal.toFixed(2)}`}</p>
          </div>
        </div>
      </div>

      <button className={style.button} onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};
