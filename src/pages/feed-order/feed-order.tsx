import { useSelector } from '../../services/types/types';
import { useLocation } from 'react-router-dom';
import FeedOrderDetails from '../../components/feed-order-details/feed-order-details';

const FeedOrderPage = () => {
  const location = useLocation()

  const { modalState } = useSelector(state => state.feed);
  const { data } = useSelector((state: any) => state.feed);
  let order: any

  if(!modalState && location.pathname.split('/')[2] && data){
    order = data.orders?.find((el: any) => el._id === location.pathname.split('/')[2])
  }

  return (
		order &&
		<main>
		<section className='mt-30'>
			<FeedOrderDetails route={order}/>
	</section>
	</main>
    )
} 

export default FeedOrderPage;