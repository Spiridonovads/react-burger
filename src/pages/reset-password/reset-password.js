import resetPasswordScreenStyles from './reset-password.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPassword = () => {
  const [form, setValue] = useState({ password: '', code: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return ( 
    <section className={resetPasswordScreenStyles.section}>
      <form className={resetPasswordScreenStyles.form}>
        <h2 className={resetPasswordScreenStyles.title}>Восстановление пароля</h2>
				<PasswordInput
          onChange={onChange}
        // value={value}
          name={'password'}
          icon="ShowIcon"
					placeholder={'Введите новый пароль'}
        />
				<Input
					type={'text'}
					placeholder={'Введите код из письма'}
					onChange={setValue}
					//icon={'CurrencyIcon'}
					//value={value}
					name={'code'}
					//error={false}
					//ref={inputRef}
					//onIconClick={onIconClick}
					errorText={'Ошибка'}
					//size={'default'}
					//extraClass="ml-1"
				/>
        <Button htmlType="button" type="primary" size="large">
          Сохранить
        </Button>
        <p className='mt-15'>Вспомнили пароль? <span> Войти </span></p>
      </form>
    </section>
    )
}

export default ResetPassword;