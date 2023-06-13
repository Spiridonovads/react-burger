import resetPasswordScreenStyles from './reset-password.module.css'
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import { useNavigate } from "react-router-dom";
import { getReset } from '../../services/actions/reset-password-data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ResetPassword = () => {

  const [form, setValue] = useState({ password: '', code: '' });
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onClick =() => {
    dispatch(getReset(form))
	}
  
  const navigate = useNavigate();
  const { data } = useSelector(state => state.reset);
  if(data.success){
    navigate('/login', { replace: true })
  }

  return ( 
    <>
    <AppHeader/>
    <main>
    <section className={resetPasswordScreenStyles.section}>
      <form className={resetPasswordScreenStyles.form}>
        <h2 className={resetPasswordScreenStyles.title}>Восстановление пароля</h2>
				<PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          icon="ShowIcon"
					placeholder={'Введите новый пароль'}
        />
				<Input
					type={'text'}
					placeholder={'Введите код из письма'}
					onChange={onChange}
					//icon={'CurrencyIcon'}
					value={form.code}
					name={'code'}
					//error={false}
					//ref={inputRef}
					//onIconClick={onIconClick}
					errorText={'Ошибка'}
					//size={'default'}
					//extraClass="ml-1"
				/>
        <Button htmlType="button" type="primary" size="large" onClick={onClick}>
          Сохранить
        </Button>
        <p className={`mt-15 ${resetPasswordScreenStyles.text}`}>Вспомнили пароль? 
        <Link to={{ pathname: '/login' }} className={resetPasswordScreenStyles.span}> Войти </Link></p>
      </form>
    </section>
    </main>
    </>
    )
}

export default ResetPassword;