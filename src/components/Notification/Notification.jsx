import propTypes from "prop-types";

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
