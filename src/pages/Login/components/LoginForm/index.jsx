import React from "react";
import { Formik } from "formik";
import styles from './LoginForm.module.css'
import {  NavLink } from "react-router-dom";
import MultipleSelectPlaceholder from "../../../../components/MultipleSelectPlaceholder";
import * as Yup from "yup";


const LoginForm= () => 

(
    
  <Formik
    initialValues={{ email: "", password: "" ,name :"",surName:"",phoneNamber:"", reEnterPassword: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 500);
    }}
    

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("This field is required."),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
        name: Yup.string()
        .required("This field is required."),
        surName: Yup.string()
        .required("This field is required."),
        phoneNamber: Yup.string()
        .required("No Phone Number provided.")
        .min(8, "Number is too short - should be 9 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
       
        reEnterPassword: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
       
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
<div className={styles.loginFormDiv1}>
        <div className={styles.loginFormDiv}>
<form  onSubmit={handleSubmit}>
  <div className={styles.arrowDiv1}>
  <div className={styles.arrowDiv}>
  <NavLink to='/home'> <div className={styles.arrow} ><img src="	https://www.pizza-hut.am/assets/images/app_2/arrow.svg" alt="" /></div></NavLink> 
    <div className={styles.registerDiv}>REGISTRATION</div>

    </div>
    </div>
    <div className={styles.registerDivOne}>REGISTRATION</div>
    <div className={styles.logReg1}>
    <div className={styles.logReg}>
 <NavLink  exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to='/authorization'><div className={styles.divNavlink}>LOG IN</div></NavLink> 
 <NavLink  exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to='/login'> <div className={styles.divNavlink}>REGISTER</div></NavLink>
</div>
</div>
  <div style={{width:'100%',display:'flex',  justifyContent: 'space-between'}}>
   <span>{errors.name && touched.name && (
            <div id="in" className="input-feedback">{errors.name}</div>
          )}</span> 
          <br></br>

        <span> {errors.surName && touched.surName  && (
            <div className="input-feedback">{errors.surName }</div>
          )}</span> 
           <br></br>
         </div>
    <div className={styles.registerDiv1}>
  <div>
 
  {errors.name && touched.name? <div  className={styles.registerDivInput}  >

<input name="name"
            type="text"
            placeholder="Name "
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}

></input>
</div>:<div className={styles.registerDivInput11}>

<input name="name"
            type="text"
            placeholder="Name "
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}

></input>
</div>
}
</div>
<div>


{errors.surName && touched.surName?<div style={{border:'1px solid red'}} className={styles.registerDivInput1}>

<input  name="surName"
            type="text"
            placeholder="SurName "
            value={values.surName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.surName&& touched.surName && "error"} 

></input>
</div>:<div className={styles.registerDivInput11}>
<input name="surName"
            type="text"
            placeholder="SurName "
            value={values.surName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.surName&& touched.surName && "error"} 

></input>
</div>}
</div>

    </div>
    <div  className={styles.selectDiv}>

  <MultipleSelectPlaceholder/> 
    

<div>
{errors.surName && touched.surName  && (
            <div className="input-feedback">{errors.surName }</div>
            
          )}

{errors.phoneNamber && touched.phoneNamber ? <div className={styles.selectDivChild}>

<input  placeholder="Phone Number" 
name="phoneNamber"
type="number"

value={values.phoneNamber}
onChange={handleChange}
onBlur={handleBlur}
className={errors.phoneNamber && touched.phoneNamber && "error"} 

></input>
</div>:<div className={styles.registerDivInput11}>
    
    <input 
     placeholder="Phone Number" 
     name="phoneNamber"
     type="number"
     
     value={values.phoneNamber}
     onChange={handleChange}
     onBlur={handleBlur}
     className={errors.phoneNamber && touched.phoneNamber && "error"} 
    
    ></input>
    </div>
}
</div>
</div>
<div>
{errors.email && touched.email  && (
            <div className="input-feedback">{errors.surName }</div>
          )}

{errors.email && touched.email ?<div className={styles.email}>
<input   placeholder="Email"
 name="email"
 type="email"
 
 value={values.email}
 onChange={handleChange}
 onBlur={handleBlur}
 className={errors.email&& touched.email && "error"} 

></input>
</div>:<div className={styles.registerDivInput11}>
<input   placeholder="Email"
 name="email"
 type="email"
 
 value={values.email}
 onChange={handleChange}
 onBlur={handleBlur}
 className={errors.email&& touched.email && "error"} 
></input>
</div>
}
</div>
<div>

{errors.email && touched.password  && (
            <div className="input-feedback">{errors.surName }</div>
          )}
{errors.email && touched.password  ?<div className={styles.email}>
<input  type="password" placeholder='Password' 
 name="password"
 
 
 value={values.password}
 onChange={handleChange}
 onBlur={handleBlur}
 className={errors.password && touched.password && "error"} 
 />
</div>:<div className={styles.registerDivInput11}>
<input  type="password" placeholder='Password' 
 name="password"
 
 
 value={values.password}
 onChange={handleChange}
 onBlur={handleBlur}
 className={errors.password && touched.password && "error"} 
 />
</div>
}
</div>
<div>

{errors.reEnterPassword && touched.reEnterPassword && (
            <div className="input-feedback">{errors.surName }</div>
          )}
{errors.reEnterPassword && touched.reEnterPassword?<div className={styles.email}>
<input type="password"
  placeholder="Re-Enter Password"

 name="reEnterPassword"
 
 
 value={values.reEnterPassword}
 onChange={handleChange}
 onBlur={handleBlur}
 className={errors.reEnterPassword && touched.reEnterPassword && "error"} 

 />
</div>:<div className={styles.registerDivInput11}>
<input  type="password"
 placeholder='Re-Enter Password' 
name="reEnterPassword"


value={values.reEnterPassword}
onChange={handleChange}
onBlur={handleBlur}
className={errors.reEnterPassword && touched.reEnterPassword && "error"} 
 />
</div>
}
</div>
<div className={styles.checkbox}>
<input  type="checkbox" />
<div >I read and agree with <a href="https://bonee.net/terms-and-conditions-en.html">Conditions</a> and <a href="https://bonee.net/privacy-policy-en.html">Privacy Policy</a></div>

</div>
<div className={styles.submitDiv}>
    <button type="submit" disabled={isSubmitting}>REGISTER</button>
</div>
</form>

</div>

</div>



      );
    }}
  </Formik>
);

export default LoginForm;
