import styles from "./select.module.css";
import React from "react";
import {IoIosArrowDown} from "react-icons/io";
import {useState} from 'react';

const Select = ({ options,title,onChange,otherClass,value }) => {
const [rotate, setRotate] = useState(false);
  return (
    <div className={`${styles.container} ${otherClass}`}>
      <span className={styles.title}>{title}</span>
      <select value={value} name={title} onChange={onChange} className={styles.select} onBlur={()=> setRotate(false)} onClick={()=> setRotate(!rotate)}>
          {options.map((option,index)=>{
              return <option key={index} value={option.value}>{option.text}</option>
          })}
      </select>
      <IoIosArrowDown className={`${styles.icon} ${rotate && styles.rotate}`}/>
    </div>
  );
};

export default React.memo(Select);
