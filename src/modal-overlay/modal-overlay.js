import appModal from './modal-overlay.module.css'
import ReactDOM from 'react-dom';
import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'





const modalRoot = document.getElementById("modals");

class ModalOverlay extends React.Component {

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
          <div className={`pt-10 pb-15 pl-10 pr-10 ${appModal.modal}`}>
            <a href='#!' onClick={this.handleCloseModal} className={appModal.close}>
            <CloseIcon/>
            </a>
            <div className={`mb-8 ${appModal.details}`}>
              Детали ингредиента
            </div>
              <img src={this.props.data.image} className={appModal.img}/>
              <p className={`mb-8 mt-4 ${appModal.name}`}>{this.props.data.name}</p>
              <div className={appModal.info}>
                <div className={`mr-5 ${appModal.text}`}>
                  Калории,ккал
                  <span>{this.props.data.calories}</span>
                </div>
                <div className={`mr-5 ${appModal.text}`}>
                  Белки, г
                  <span>{this.props.data.proteins}</span>
                </div>
                <div className={`mr-5 ${appModal.text}`}>
                  Жиры, г
                  <span>{this.props.data.fat}</span>
                </div>
                <div className={appModal.text}>
                  Углеводы, г
                  <span>{this.props.data.carbohydrates}</span>
                </div>
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


export default ModalOverlay;