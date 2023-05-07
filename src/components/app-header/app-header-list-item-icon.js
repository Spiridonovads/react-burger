import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';



const AppHeaderListItemIcon = (props) => {
  if(props.icon === 'burgerIcon'){
    return (
      <BurgerIcon/>
    )
  }

  if(props.icon === 'listIcon'){
    return (
      <ListIcon/>
    )
  }

  if(props.icon === 'profileIcon'){
    return (
      <ProfileIcon/>
    )
  }
}



AppHeaderListItemIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}



export default AppHeaderListItemIcon;