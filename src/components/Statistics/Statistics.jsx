import Notification from "../Notification/Notification";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Statistics</p>
      {total > 0 ? (
        <div>
          <ul>
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

export default Statistics;
