import appOrderDetailsStyle from './order-details.module.css'



const OrderDetails = () => {
    return (
        <div className={`pt-30 pb-30 ${appOrderDetailsStyle.wrapper}`}>
          <p className={`mb-8 ${appOrderDetailsStyle.id}`}>
              035678
            </p>
            <p className={`mb-15 ${appOrderDetailsStyle.id__text}`}>
              идентификатор заказа
            </p>
            <div className={`mb-15 ${appOrderDetailsStyle.img}`}/>
              <div className={appOrderDetailsStyle.text}>
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
    )
} 



export default OrderDetails;