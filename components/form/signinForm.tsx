import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { siginAsync } from '../../redux/slice/authSlice'
import styles from '../../styles/form/signinForm.module.scss'
import { useRouter } from 'next/router'
type Props = {}
type Inputs = {
  email: string,
  password: string,
};

const SigninForm = (props: Props) => {
  const dataToken = useSelector((state: any) => state.auth.accessToken)
  const user = useSelector((state: any) => state.auth)
  const router = useRouter()
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    let { email, password } = data
    await dispatch(siginAsync({ email, password }))
    if (user.status == true) {
      router.push('/')
    }
  }
  useEffect(() => {
    if (user.status == true) {
      router.push('/')
    }
  }, [user])
  
  console.log(user.status);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={styles.rootForm}>
      <h3>Bruno</h3>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='E-mail' {...register("email")} />
      {errors.email && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder='Password' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      {user.error && (
        <div style={{ fontSize: "10px", color: "red" }}>
          {user.error}
        </div>
      )}
      <input type="submit" className={styles.but} />
    </form>
  )
}

export default SigninForm
