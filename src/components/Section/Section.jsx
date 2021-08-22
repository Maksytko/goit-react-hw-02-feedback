import propTypes from "prop-types";
import style from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section className={style.section}>
      <p>{title}</p>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
