import React, {useState} from 'react'
import styles from "./inputbar.module.css"

export const Inputbar = ({placeholder,label,type, value, onChange}) => {
  return (
    <div className={styles.inputwrapper}>
        <div className={styles.label}>{label}</div>
        <input 
        type={type} 
        value={value}
        placeholder={placeholder} 
        className={styles.bar}
        onChange={onChange}/>
    </div>  
  )
}
