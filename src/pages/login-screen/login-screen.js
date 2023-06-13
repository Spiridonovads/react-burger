import loginScreenStyles from './login-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../../services/actions/login-data';

const LoginScreen = () => {

  const [form, setValue] = useState({ email: '', password: '' });
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onClick =() => {
    dispatch(getLogin(form));
  }
  
  const { data } = useSelector(state => state.login);
  const navigate = useNavigate();

  if (data.success) {
    navigate('/', { replace: true })
  }
  
  return ( 
    <>
    <AppHeader/>
    <main>
    <section className={loginScreenStyles.section}>
      <form className={loginScreenStyles.form}>
        <h2 className={loginScreenStyles.title}>Вход</h2>
        <EmailInput 
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Логин"
          isIcon={false}/>
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          icon="ShowIcon"
          placeholder="Пароль"
        />
        <Button htmlType="button" type="primary" size="large" onClick={onClick}>
          Войти
        </Button>
        <div className={`mt-15 ${loginScreenStyles.text__block}`}>
        <p className={loginScreenStyles.text}>Вы — новый пользователь? 
          <Link
            to={{ pathname: '/register' }}
            className={loginScreenStyles.span}
          >Зарегистрироваться</Link></p>
        <p className={loginScreenStyles.text}>Забыли пароль? 
          <Link
            to={{ pathname: '/forgot-password' }}
            className={loginScreenStyles.span}
          >Восстановить пароль</Link></p>
        </div>
      </form>
    </section>
    </main>
    </>
    )
}

export default LoginScreen;
