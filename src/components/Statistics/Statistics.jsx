import Notification from "../Notification/Notification";
import propTypes from "prop-types";
import style from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Statistics</p>
      {total > 0 ? (
        <div>
          <ul className={style.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};

export default Statistics;
