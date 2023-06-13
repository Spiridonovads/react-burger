import forgotPasswordScreenStyles from './forgot-password.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState} from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import { Link } from 'react-router-dom';
import { getForgot } from '../../services/actions/forgot-password-data';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const ForgotPassword = () => {

  const [form, setValue] = useState({ email: '' });
  const onChange = e => {
    setValue({ ...form, email: e.target.value });
  };

  const dispatch = useDispatch();
  const onClick =() => {
    dispatch(getForgot(form));
  }

  const { data } = useSelector(state => state.forgot);
  const navigate = useNavigate();
  if(data.success){
    navigate('/reset-password', { replace: true })
  }

  return ( 
    <>
    <AppHeader/>
    <main>
    <section className={forgotPasswordScreenStyles.section}>
      <form className={forgotPasswordScreenStyles.form}>
        <h2 className={forgotPasswordScreenStyles.title}>Восстановление пароля</h2>
        <EmailInput 
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Укажите e-mail"
          isIcon={false}/>
        <Link>
          <Button htmlType="button" onClick={onClick} type="primary" size="large">Восстановить</Button>
         </Link>
        <p className={`mt-15 ${forgotPasswordScreenStyles.text}`}>Вспомнили пароль? 
          <Link
            to={{ pathname: '/login' }}
            className={forgotPasswordScreenStyles.span}
          >Войти</Link></p>
      </form>
    </section>
    </main>
    </>
    )
}

export default ForgotPassword;