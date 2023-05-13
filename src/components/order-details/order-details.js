import appOrderDetailsStyle from './order-details.module.css'
import PropTypes from 'prop-types';



const OrderDetails = ({data, loading, error}) => {
  console.log(data)
    return (
        <div className={`pt-30 pb-30 ${appOrderDetailsStyle.wrapper}`}>
          {loading && <h1>Загрузка...</h1>}
          {error && <h1>Произошла ошибка</h1>}
          {!loading && !error && 
          <p className={`mb-8 ${appOrderDetailsStyle.id}`}>
              {data.number}
            </p>
            }
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



OrderDetails.propTypes = {
  data: PropTypes.object.isRequired,
}



export default OrderDetails;