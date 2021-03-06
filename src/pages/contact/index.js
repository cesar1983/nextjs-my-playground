import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Contact() {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && 'First name is required'}
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && 'Last name is required'}{' '}
      <input
        name="age"
        type="number"
        ref={register({ required: true, min: 18, max: 99 })}
      />
      <p>{errors.age && 'Age required and must be between 18 and 99'}</p>
      <input type="submit" />
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Voltar</button>
    </form>
  )
}
