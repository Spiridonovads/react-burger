import profileScreenStyles from './profile.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getPerson, getChangePerson } from '../../services/actions/person-data';
import { getLogout } from '../../services/actions/logout-data';

const Profile = () => {
  const [form, setValue] = useState({ email: '', password: '', name: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

	const dispatch = useDispatch();
	const logoutClick = () => {
    dispatch(getLogout());
  }
	const logoutData = useSelector(state => state.logout.data);
  const navigate = useNavigate();
	console.log(logoutData)

	if (logoutData.success) {
		navigate('/login', { replace: false })
		} 

	useEffect(() => {
			dispatch(getPerson());
	},[]);
	const { data } = useSelector(state => state.person);

	const onClick =() => {
		dispatch(getChangePerson(form))
	}

  return ( 
		<>
		<AppHeader/>
		<main>
    <section className={profileScreenStyles.section}>
				<div>
				<ul>
					<li className={profileScreenStyles.list__item}>
						<Link to={{ pathname: '/profile' }}
							className={profileScreenStyles.active__link}>Профиль</Link>
					</li>
					<li  className={profileScreenStyles.list__item}>
						<Link	to={{ pathname: '/profile' }}
							className={profileScreenStyles.link}>История заказов</Link>
					</li>
					<li className={profileScreenStyles.list__item}>
						<Link to={{ pathname: '/profile' }} className={profileScreenStyles.link} onClick={logoutClick}>Выход</Link>
					</li>
					<li className={` mt-20 ${profileScreenStyles.other__link}`}>
					В этом разделе вы можете изменить свои персональные данные</li>
				</ul>
				</div>
				<form className={profileScreenStyles.form}>
					<Input
						placeholder={data.success ? data.user.name : 'Имя'}
						onChange={onChange}
						icon={'EditIcon'}
						value={form.name}
						name={'name'}
					/>
					<EmailInput 
						onChange={onChange}
						value={form.email}
						name={'email'}
						placeholder={data.success ? data.user.email : 'Логин'}
						icon={'EditIcon'}
						/>
					<PasswordInput
						onChange={onChange}
						value={form.password}
						name={'password'}
						icon={'EditIcon'}
						placeholder={'***********'}
					/>
					<Button htmlType="button" type="primary" size="large" onClick={onClick}>
          Сохранить
        </Button>
      	</form>
    </section>
		</main>
		</>
    )
}

export default Profile;