import styles from'./App.module.css';
import { Button } from '../my_comp/button';
import { Otpinput } from '../my_comp/otpinput';
import OTPTimer from '../my_comp/timer';
import Start1 from './start1';

function Verify() {
  return (
    <div className={styles.back}>
      <div className={styles.box}>
        <h1 className={styles.verify}>Verify Email</h1>
        <p className={styles.greytext1}>Verify your email below to proceed</p>
        <p className={styles.greytext2}>Enter the <span className={styles.blacktext}>5 digits code</span> sent to your email address <span className={styles.blacktext}>p*******@gmail.com</span> below.</p>
        <Otpinput/>
        <p className={styles.greytext2}>Code Expires in <OTPTimer/> </p>
        <p className={styles.greytext2}>Didn't get code?<a className={styles.forgetpassword}>Resend Code</a></p>
        <Button order="Verify Email Address" to="/start1"/>
      </div>
    </div>
  );
}

export default Verify;
