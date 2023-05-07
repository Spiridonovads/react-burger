import appModal from './modal.module.css'
import ReactDOM from 'react-dom';
import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'



const modalRoot = document.getElementById("modals");

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  handleCloseModal = () => {
    this.setState({ visible: false });
  } 

  render() {
    return ReactDOM.createPortal(
      (

        <>
        {this.state.visible &&
        <article className={appModal.article}>
          <div className={`pt-30 pb-30 ${appModal.modal}`}>
            <a href='#!' onClick={this.handleCloseModal} className={appModal.close}>
            <CloseIcon/>
            </a>
            <p className={`mb-8 ${appModal.id}`}>
              035678
            </p>
            <p className={`mb-15 ${appModal.id__text}`}>
              идентификатор заказа
            </p>
            <div className={`mb-15 ${appModal.img}`}/>
              <div className={appModal.text}>
                <p className='mb-2'>
                  Ваш заказ начали готовить
                </p>
                <p>
                <span>
                  Дождитесь готовности на орбитальной станции
                </span>
                </p>
            </div>
                 
          </div>
        </article>
        }
        </>
            ), 
            modalRoot
        );
  }
} 


export default Modal;