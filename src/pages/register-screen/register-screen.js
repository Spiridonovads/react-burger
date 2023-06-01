import registerScreenStyles from './register-screen.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const RegisterScreen = () => {
  const [form, setValue] = useState({ email: '', password: '', name: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return ( 
    <section className={registerScreenStyles.section}>
      <form className={registerScreenStyles.form}>
        <h2 className={registerScreenStyles.title}>Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={setValue}
					//icon={'CurrencyIcon'}
					//value={value}
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
          Зарегистрироваться
        </Button>
        <p className='mt-15'>Уже зарегистрированы? <span> Войти </span></p>
      </form>
    </section>
    )
}

export default RegisterScreen;