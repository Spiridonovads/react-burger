import appFeedOrderStyle from "./feed-order.module.css";
import FeedOrderProducts from "./feed-order-products";
import { useSelector, useDispatch } from "../../services/types/types";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import FeedOrderDetails from "../feed-order-details/feed-order-details";
import { setFeedModalState } from "../../services/actions/feed-data";

const FeedOrder = () => {
  const orders = useSelector((state: any) => state.socket.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = (): void => {
    navigate("/feed", { replace: true });
    dispatch(setFeedModalState(false));
  };

  const { modalState } = useSelector((state) => state.feed);

  return (
    <>
      <div className={`pr-2 ${appFeedOrderStyle.scroll}`}>
        {orders.orders.map((el: any, i: any) => {
          return <FeedOrderProducts key={i}>{el}</FeedOrderProducts>;
        })}
      </div>
      {modalState && (
        <Modal onCloseButtonClick={closeModal}>
          <FeedOrderDetails />
        </Modal>
      )}
    </>
  );
};

export default FeedOrder;
