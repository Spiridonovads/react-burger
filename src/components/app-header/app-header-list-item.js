import React from 'react';
import appHeaderStyles from './app-header.module.css';
import AppHeaderListItemIcon from './app-header-list-item-icon';
import PropTypes from 'prop-types';



const AppHeaderListItem = (props) => {
	return (
	<>
		<div className={appHeaderStyles.item}>
			<AppHeaderListItemIcon icon ={props.icon}/>
			<a href='#!' className={`pl-2 ${appHeaderStyles.button}`}>
			{props.name}
			</a>
		</div>
	</>
	)
}



AppHeaderListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}



export default AppHeaderListItem;