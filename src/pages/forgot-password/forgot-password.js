import forgotPasswordScreenStyles from './forgot-password.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPassword = () => {
  const [form, setValue] = useState({ email: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return ( 
    <section className={forgotPasswordScreenStyles.section}>
      <form className={forgotPasswordScreenStyles.form}>
        <h2 className={forgotPasswordScreenStyles.title}>Восстановление пароля</h2>
        <EmailInput 
          onChange={onChange}
        /* value={value}*/
          name={'email'}
          placeholder="Укажите e-mail"
          isIcon={false}/>
        <Button htmlType="button" type="primary" size="large">
          Восстановить
        </Button>
        <p className='mt-15'>Вспомнили пароль? <span> Войти </span></p>
      </form>
    </section>
    )
}

export default ForgotPassword;