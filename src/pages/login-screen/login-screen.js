import loginScreenStyles from './login-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const LoginScreen = () => {
  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return ( 
    <section className={loginScreenStyles.section}>
      <form className={loginScreenStyles.form}>
        <h2 className={loginScreenStyles.title}>Вход</h2>
        <EmailInput 
          onChange={onChange}
        /* value={value}*/
          name={'email'}
          placeholder="Логин"
          isIcon={false}/>
        <PasswordInput
          onChange={onChange}
        // value={value}
          name={'password'}
          icon="ShowIcon"
          placeholder="Пароль"
        />
        <Button htmlType="button" type="primary" size="large">
          Войти
        </Button>
        <div className={`mt-15 ${loginScreenStyles.text}`}>
        <p>Вы — новый пользователь? <span> Зарегистрироваться </span></p>
        <p>Забыли пароль? <span> Восстановить пароль </span></p>
        </div>
      </form>
    </section>
    )
}

export default LoginScreen;
/*
<form name="login" autocomplete="on">
     
      </form>
*/