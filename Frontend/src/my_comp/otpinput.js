import React,{useEffect, useState, useRef} from 'react'
import styles from "./otpinput.module.css"

export const Otpinput = ({length=5, onSubmit=()=>{}}) => {
    const [otp,setotp]=useState(Array(length).fill(""));
    const inputRefs=useRef([]);
    const onOtpSubmit=(otp)=>{
        console.log("login sucessfull",otp);
    }
    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])
     const handleChange = (e, index) => {
        const value = e.target.value;
        if(isNaN(value)){
            return;
        }
        const newOtp=[...otp];
        newOtp[index]=value.substring(value.length-1);//allow only 1 input
        setotp(newOtp);  //setotp is asynchronous
        const combinedotp= newOtp.join("");
        console.log(combinedotp);
        console.log(newOtp);
        if(combinedotp.length===length){   //submit triggers
            onOtpSubmit(combinedotp);
        }
        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }

     }
     const handleClick =()=>{};
     const handleKeydown =(e,index)=>{
        if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
             inputRefs.current[index-1].focus();
        }
     };

  return (
    <div className={styles.otpcontainer}>
        {otp.map((value,index)=>(
            <input 
            key={index}
            type="text"
            ref={(input)=>{inputRefs.current[index]=input}}
            value={value}
            className={styles.otpinput}
            onChange={(e)=>handleChange(e,index)}
            onClick={()=>handleClick(index)}
            onKeyDown={(e)=>handleKeydown(e,index)}/>
    )
   )}</div>
  )
}
