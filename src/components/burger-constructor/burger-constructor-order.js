import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import Modal from '../modal/modal';



const BurgerConstructorOrder = (props) => {
    const modal = (
      <Modal/>)
  
    return (
      <>
        <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
          <div className={appBurgerConstructorStyle.price__title}>
            <p>{props.total}</p>
            <CurrencyIcon/>
          </div>
          <Button htmlType="button" type="primary" size="medium" /*onClick={this.handleOpenModal}*/>
            Оформить заказ
          </Button>
          {/*this.state.visible && modal*/}
        </div>
    </>
    );
}; 



export default BurgerConstructorOrder;

