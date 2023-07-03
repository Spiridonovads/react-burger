import registerScreenStyles from './register-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, ChangeEvent, FormEvent } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getRegister, DELETE_REGISTER } from '../../services/actions/register-data';
import { useSelector, useDispatch } from 'react-redux';

type Data = { email: string, password: string, name: string }

const RegisterScreen = () => {

  const [form, setValue] = useState<Data>({ email: '', password: '', name: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch: any = useDispatch();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getRegister(form));
  };
 
  const navigate = useNavigate();
  const { data } = useSelector((state: any) => state.register);
  if(data.success){
    navigate('/login', { replace: true })
    dispatch({type: DELETE_REGISTER})
  }

  return ( 
    <main>
    <section className={registerScreenStyles.section}>
      <form onSubmit={handleFormSubmit} className={registerScreenStyles.form}>
        <h2 className={registerScreenStyles.title}>Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={onChange}
					value={form.name}
					name={'name'}
					errorText={'Ошибка'}
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
        <Button htmlType="submit" type="primary" size="large">
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
    )
}

export default RegisterScreen;