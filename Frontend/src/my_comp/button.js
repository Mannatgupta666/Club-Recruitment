import React from 'react';
import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";


export const Button = ({order, to}) => {
  const navigate = useNavigate();
  const handleclick=()=>{
    if(to){
      navigate(to);
    }
  }
  return (
    <button onClick={handleclick} className={styles.bar}>{order}</button>
  )
}
