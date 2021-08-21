import { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../Feedback_options/Feedback_options";
import Section from "../Section/Section";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.floor((this.state.good * 100) / total);
  }

  onLeaveFeedback = (event) => {
    const target = event.target.name;

    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[target] + 1,
      };
    });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default Feedback;
