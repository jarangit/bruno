import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../../styles/form/signinForm.module.scss'
type Props = {}
type Inputs = {
  email: string,
  password: string,
};
const SigninForm = (props: Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}  className = {styles.rootForm}>
      <h3>Bruno</h3>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='E-mail' {...register("email")} />
      {errors.email && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder='Password' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" className={styles.but}/>
    </form>
  )
}

export default SigninForm