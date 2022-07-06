import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { siginAsync } from '../../redux/slice/authSlice'
import styles from '../../styles/form/signinForm.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFromStorage } from '../../utills';
type Props = {}
type Inputs = {
  email: string,
  password: string,
};

const SigninForm = (props: Props) => {
  const { loading, status, error } = useSelector((state: any) => state.auth)
  const router = useRouter()
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    let { email, password } = data
    dispatch(siginAsync({ email, password }))
    if (status == true) {
      router.push('/')
    }
  }
  useEffect(() => {
    const token = getFromStorage("token")
    console.log('%cMyProject%cline:28%ctoken', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px', token)
    if (status == true) {
      router.push('/')
    }
  }, [loading])

  console.log("login")
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={styles.rootForm}>
      <h3>Bruno</h3>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='E-mail' {...register("email", { required: true }) } />
      {errors.email && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder='Password' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      {error && (
        <div style={{ fontSize: "10px", color: "red" }}>
          {error}
        </div>
      )}
      <button type='submit' className={styles.but}>{loading ? "Loading" : "Signin"}</button>
    </form>
  )
}

export default SigninForm
