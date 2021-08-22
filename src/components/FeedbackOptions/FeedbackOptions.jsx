import propTypes from "prop-types";
import style from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            className={style.buttonFeedback}
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.func,
};

export default FeedbackOptions;
