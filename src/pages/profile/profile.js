import profileScreenStyles from './profile.module.css'
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const Profile = () => {
  const [form, setValue] = useState({ email: '', password: '', name: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return ( 
    <section className='mt-30'>
			<div className={profileScreenStyles.wrapper}>
				<div>
				<ul>
					<li className={profileScreenStyles.link}>Профиль</li>
					<li className={profileScreenStyles.link}>История заказов</li>
					<li className={profileScreenStyles.link}>Выход</li>
					<li className={` mt-20 ${profileScreenStyles.other__link}`}>В этом разделе вы можете изменить свои персональные данные</li>
				</ul>
				</div>
				<form className={profileScreenStyles.form}>
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
      	</form>
			</div>
    </section>
    )
}

export default Profile;