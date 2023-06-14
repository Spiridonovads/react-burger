import registerScreenStyles from './register-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getRegister } from '../../services/actions/register-data';
import { useSelector, useDispatch } from 'react-redux';

const RegisterScreen = () => {

  const [form, setValue] = useState({ email: '', password: '', name: '' });
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
	const onClick =() => {
    dispatch(getRegister(form));
  }
 
  const navigate = useNavigate();
  const { data } = useSelector(state => state.register);
  if(data.success){
    navigate('/login', { replace: true })
  }

  return ( 
    <>
    <AppHeader/>
    <main>
    <section className={registerScreenStyles.section}>
      <form className={registerScreenStyles.form}>
        <h2 className={registerScreenStyles.title}>Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={onChange}
					//icon={'CurrencyIcon'}
					value={form.name}
					name={'name'}
					//error={false}
					//ref={inputRef}
					//onIconClick={onIconClick}
					errorText={'Ошибка'}
					//size={'default'}
					//extraClass="ml-1"
				/>
        <EmailInput 
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Почта"
          isIcon={false}/>
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          icon="ShowIcon"
          placeholder="Пароль"
        />
        <Button htmlType="button" type="primary" size="large" onClick={onClick}>
          Зарегистрироваться
        </Button>
        <p className={`mt-15 ${registerScreenStyles.text}`}>Уже зарегистрированы?
          <Link
            to={{ pathname: '/login' }}
            className={registerScreenStyles.span}
          >Войти</Link></p>
      </form>
    </section>
    </main>
    </>
    )
}

export default RegisterScreen;