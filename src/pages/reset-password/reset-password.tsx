import resetPasswordScreenStyles from './reset-password.module.css'
import { useState, ChangeEvent, FormEvent } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from "react-router-dom";
import { getReset, DELETE_RESET } from '../../services/actions/reset-password-data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types/types';
import { deleteForgot } from '../../services/actions/forgot-password-data';

type Data = { password: string, code: string }

const ResetPassword = () => {

  const [form, setValue] = useState<Data>({ password: '', code: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getReset(form));
  };
  
  const navigate = useNavigate();
  const { data } = useSelector((state: any) => state.reset);
  if(data.success){
    navigate('/login', { replace: true })
    dispatch({type: DELETE_RESET})
    dispatch(deleteForgot())
  }

  return ( 
    <main>
    <section className={resetPasswordScreenStyles.section}>
      <form onSubmit={handleFormSubmit} className={resetPasswordScreenStyles.form}>
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
					value={form.code}
					name={'code'}
					errorText={'Ошибка'}
				/>
        <Button htmlType="submit" type="primary" size="large">
          Сохранить
        </Button>
        <p className={`mt-15 ${resetPasswordScreenStyles.text}`}>Вспомнили пароль? 
        <Link to={{ pathname: '/login' }} className={resetPasswordScreenStyles.span}> Войти </Link></p>
      </form>
    </section>
    </main>
    )
}

export default ResetPassword;