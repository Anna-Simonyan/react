import React from 'react'
import styles from './Authorization.module.css'
import arrowWhite from '../../assets/Images/arrowWhite.svg'
import loginBackground from '../../assets/Images/loginBackground.svg'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import arrowLightGrey from '../../assets/Images/arrowLightGrey.svg'
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import AuthorizationLogin from '../AuthorizationLogin';



const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


const Authorization = () => {
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };


      const handleChange =
      () => (event) => {
        setValues(event.target.value )
      };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
   
  return (
    <div className={styles.log6}>
    <div className={styles.loginContainerDiv}>
    <div className={styles.loginContainer}>
<ul >
<div >
    <img src={arrowWhite} alt="" />
    <a href="/home">Main page</a>
</div>
<li>
    <img src={loginBackground} alt="" />
    <div className={styles.loginLiDiv}>
<div className={styles.loginLiDiv1}>
    <div className={styles.loginLiDiv2}></div>
    <div className={styles.loginLiDiv3}>
       <div className={styles.loginLiDiv3P}>Hi</div>
       <div className={styles.loginLiDiv3P1}>Pizza Hut</div>

    </div>
    <div>
        
    </div>


  
</div>

<div className={styles.log}>Register and get access on all services  with one account</div>

<div onClick={()=>navigate('/login')} className={styles.log1}>
<label >REGISTER</label>
</div>
    </div>

</li>
</ul>



<div className={styles.formContainer}>

         
     
<form onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.registerDiv}>AUTHORIZATION</div>
    <div className={styles.registerDivText}>You can log in with Bonee account</div>
    {errors?.email?.type === "required" && <p style={{color:'red',fontSize:'11px',display:'flex',justifyContent:'flex-end'}}>This field is required</p>}
      
      <div  className={styles.emailDiv}>
     
      {errors?.email?.type === "required"?  <div style={{border:'1px solid red'}} >
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" ><g data-name="Layer 2"><g   ><path  d="M3,0H15a3,3,0,0,1,3,3v9a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0ZM3,1.5A1.5,1.5,0,0,0,1.5,3v9A1.5,1.5,0,0,0,3,13.5H15A1.5,1.5,0,0,0,16.5,12V3A1.5,1.5,0,0,0,15,1.5H3"></path><polyline points="16.5 3 9 9.1 1 3.15" ></polyline></g></g></svg>
<input  placeholder="Email" 
name="email" type="email"
{...register("email", {
  required: true,
  maxLength: 20,
  pattern: /^[A-Za-z]+$/i
})}
/>





</div>:<div >
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" ><g data-name="Layer 2"><g   ><path  d="M3,0H15a3,3,0,0,1,3,3v9a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0ZM3,1.5A1.5,1.5,0,0,0,1.5,3v9A1.5,1.5,0,0,0,3,13.5H15A1.5,1.5,0,0,0,16.5,12V3A1.5,1.5,0,0,0,15,1.5H3"></path><polyline points="16.5 3 9 9.1 1 3.15" ></polyline></g></g></svg>
<input    placeholder="Email" name="email"  type="email"
{...register("email", {
  required: true,
  maxLength: 20,
  pattern: /^[A-Za-z]+$/i
})}

/>





</div>
}
    </div>

<div className={styles.passwordDiv}>
{errors?.password?.type === "required" && <p style={{color:'red',fontSize:'11px',display:'flex',justifyContent:'flex-end'}}>This field is required</p>}

  {errors?.password?.type === "required" ?<div className={styles.passwordDiv1} >
  
<svg _ngcontent-tio-c69="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" class="mr-3"><g _ngcontent-tio-c69="" id="Layer_2" data-name="Layer 2"><g _ngcontent-tio-c69="" id="Layer_1-2" data-name="Layer 1"><path _ngcontent-tio-c69="" d="M15.3,16.63a2.59,2.59,0,0,1-2.55,2.63H4.25A2.59,2.59,0,0,1,1.7,16.63V11.38A2.59,2.59,0,0,1,4.25,8.75h8.5a2.59,2.59,0,0,1,2.55,2.63ZM4.25,6.13A4.31,4.31,0,0,1,8.5,1.75a4.31,4.31,0,0,1,4.25,4.38V7H4.25Zm10.2,1.25V6.13A6,6,0,0,0,8.5,0a6,6,0,0,0-6,6.13V7.37a4.38,4.38,0,0,0-2.55,4v5.25A4.32,4.32,0,0,0,4.25,21h8.5A4.32,4.32,0,0,0,17,16.63V11.38A4.38,4.38,0,0,0,14.45,7.37Z"></path><path _ngcontent-tio-c69="" d="M8.5,12.28a.87.87,0,0,0-.87.87v1.73a.87.87,0,0,0,1.73,0V13.14A.87.87,0,0,0,8.5,12.28Z"></path></g></g></svg>

<FormControl sx={{ m: 1, width: '100ch' }} variant="filled">
       
          <FilledInput placeholder='Password'  sx={{width:'100%',}}
            id="filled-adornment-password"
            {...register("password", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
        </FormControl>


</div>:<div className={styles.passwordDiv2}>
  
<svg _ngcontent-tio-c69="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" class="mr-3"><g _ngcontent-tio-c69="" id="Layer_2" data-name="Layer 2"><g _ngcontent-tio-c69="" id="Layer_1-2" data-name="Layer 1"><path _ngcontent-tio-c69="" d="M15.3,16.63a2.59,2.59,0,0,1-2.55,2.63H4.25A2.59,2.59,0,0,1,1.7,16.63V11.38A2.59,2.59,0,0,1,4.25,8.75h8.5a2.59,2.59,0,0,1,2.55,2.63ZM4.25,6.13A4.31,4.31,0,0,1,8.5,1.75a4.31,4.31,0,0,1,4.25,4.38V7H4.25Zm10.2,1.25V6.13A6,6,0,0,0,8.5,0a6,6,0,0,0-6,6.13V7.37a4.38,4.38,0,0,0-2.55,4v5.25A4.32,4.32,0,0,0,4.25,21h8.5A4.32,4.32,0,0,0,17,16.63V11.38A4.38,4.38,0,0,0,14.45,7.37Z"></path><path _ngcontent-tio-c69="" d="M8.5,12.28a.87.87,0,0,0-.87.87v1.73a.87.87,0,0,0,1.73,0V13.14A.87.87,0,0,0,8.5,12.28Z"></path></g></g></svg>

<FormControl sx={{ m: 1, width: '100ch' }} variant="filled">
          
          <FilledInput placeholder='Password' sx={{width:'100%',}}
            id="filled-adornment-password"
            {...register("password", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
        </FormControl>


</div>
}
<div className={styles.forgotDiv}>
<span >Forgot your Password?</span>
</div>
    </div>
    
<div className={styles.submitDiv}>
    <button> LOG IN</button>
</div>

<div className={styles.orDiv}>
    <div>
    <span>OR</span>
    </div>
</div>
</form> 

<a  href="https://signup.bonee.net?teamreferer=https://www.pizza-hut.am:&amp;provider=google">
    <div className={styles.aDiv}>
        <button >
            <div className={styles.gDiv}>
                <span className={styles.spanDiv}>
                    <i class="fa fa-google"></i>
                    </span> 
                <p >Continue with Google </p> 
                </div>
                    <div >
                        <img style={{width:'14px',height:'14px'}}
                         src={arrowLightGrey} /></div></button></div></a>

<div  className={styles.aDiv1} ><button ><div ><svg _ngcontent-osh-c69="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.51 22.83" class="cls-3333 mr-3"><g _ngcontent-osh-c69="" id="Layer_2" data-name="Layer 2"><g _ngcontent-osh-c69="" id="Layer_1-2" data-name="Layer 1"><g _ngcontent-osh-c69="" class="cls-4444"><path _ngcontent-osh-c69="" d="M19.51,21.83V19.51a4.63,4.63,0,0,0-4.63-4.63H5.63A4.63,4.63,0,0,0,1,19.51v2.31" class="cls-3333"></path><circle _ngcontent-osh-c69="" cx="10.26" cy="5.63" r="4.63" class="cls-3333"></circle></g></g></g></svg> 
 Continue as a Guest  </div><div >
    <img  style={{width:'14px',height:'14px'}} src={arrowLightGrey}/></div></button></div>
    
           

   
</div>


    </div>
    </div>
    <div className={styles.openLoginDiv}>
      <AuthorizationLogin/>
      </div> 
    </div>
  )
}
export default Authorization 