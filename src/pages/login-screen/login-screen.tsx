import loginScreenStyles from './login-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../../services/actions/login-data';
import { DELETE_LOGIN } from '../../services/actions/login-data';

type Data = { email: string, password: string }

const LoginScreen = () => {

  const [form, setValue] = useState<Data>({ email: '', password: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch: any = useDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getLogin(form));
  };

  const { data } = useSelector((state: any) => state.login);
  const navigate = useNavigate();

  if (data.success) {
    navigate('/', { replace: true })
    dispatch({type: DELETE_LOGIN})
  }
  
  return ( 
    <main>
    <section className={loginScreenStyles.section}>
      <form onSubmit={handleFormSubmit} className={loginScreenStyles.form}>
        <h2 className={loginScreenStyles.title}>Вход</h2>
        <EmailInput 
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Логин"
          isIcon={false}
          />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          icon="ShowIcon"
          placeholder="Пароль"
         />
        <Button htmlType="submit" type="primary" size="large">
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
    )
}

export default LoginScreen;
