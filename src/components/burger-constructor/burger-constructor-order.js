import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import Modal from '../modal/modal';



class BurgerConstructorOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ visible: true });
  }

  render() {
    const modal = (
      <Modal/> 
  );
  
    return (
      <>
        <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
          <div className={appBurgerConstructorStyle.price__title}>
            <p>66</p>
            <CurrencyIcon/>
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={this.handleOpenModal}>
            Оформить заказ
          </Button>
          {this.state.visible && modal}
        </div>
    </>
    );
  }
}; 



export default BurgerConstructorOrder;

