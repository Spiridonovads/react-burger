import forgotPasswordScreenStyles from './forgot-password.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { getForgot } from '../../services/actions/forgot-password-data';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from '../../services/types/types';

type Data = { email: string }

const ForgotPassword = () => {

  const [form, setValue] = useState<Data>({ email: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, email: e.target.value });
  };

  const dispatch = useDispatch();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getForgot(form));
  };

  const { data } = useSelector((state: any) => state.forgot);
  
  const navigate = useNavigate();
  if(data.success){
    navigate('/reset-password', { replace: true })
  }

  return ( 
    <main>
    <section className={forgotPasswordScreenStyles.section}>
      <form onSubmit={handleFormSubmit} className={forgotPasswordScreenStyles.form}>
        <h2 className={forgotPasswordScreenStyles.title}>Восстановление пароля</h2>
        <EmailInput 
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Укажите e-mail"
          isIcon={false}/>
          <Button htmlType="submit" type="primary" size="large">Восстановить</Button>
        <p className={`mt-15 ${forgotPasswordScreenStyles.text}`}>Вспомнили пароль? 
          <Link
            to={{ pathname: '/login' }}
            className={forgotPasswordScreenStyles.span}
          >Войти</Link></p>
      </form>
    </section>
    </main>
    )
}

export default ForgotPassword;