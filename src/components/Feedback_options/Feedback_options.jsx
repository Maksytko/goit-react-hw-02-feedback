function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
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

export default FeedbackOptions;
