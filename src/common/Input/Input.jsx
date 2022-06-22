import styles from "./input.module.css";
import React from "react";

const Input = ({ value,onChange,type, title, desc, minimum, maximum, otherClass }) => {
  return (
    <div className={`${styles.container} ${otherClass}`}>
      <span className={styles.title}>{title}</span>
      <input
        name={title}
        value={value}
        onChange={onChange}
        className={styles.input}
        min={minimum}
        max={maximum}
        type={type}
        placeholder={desc}
      />
    </div>
  );
};

export default React.memo(Input);
