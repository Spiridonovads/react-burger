import profileScreenStyles from './profile.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect, ChangeEvent } from 'react';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getPerson, getChangePerson } from '../../services/actions/person-data';
import { DELETE_LOGOUT, getLogout } from '../../services/actions/logout-data';

type Data = { email: string, password: string, name: string }

const Profile = () => {
  const [form, setValue] = useState<Data>({ email: '', password: '', name: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

	const dispatch: any = useDispatch();
	const logoutClick = () => {
		dispatch(getLogout());
  }
	const logoutData = useSelector((state: any) => state.logout.data);
  const navigate = useNavigate();

	if (logoutData.success) {
		navigate('/login', { replace: false })
		dispatch({type: DELETE_LOGOUT})
		} 

	useEffect(() => {
			dispatch(getPerson());
	},[]);
	const { data } = useSelector((state: any) => state.person);

	const onClick =() => {
		dispatch(getChangePerson(form))
	}

  return ( 
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
						//icon={'EditIcon'}
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
    )
}

export default Profile;