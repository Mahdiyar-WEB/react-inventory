import styles from './textarea.module.css';

const Textarea = ({ title, desc, onChange, value}) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <textarea
        value={value}
        className={styles.textarea}
        name={title}
        placeholder={desc}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
