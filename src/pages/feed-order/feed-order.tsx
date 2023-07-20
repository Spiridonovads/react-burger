import { useSelector } from "../../services/types/types";
import { useLocation, useParams } from "react-router-dom";
import FeedOrderDetails from "../../components/feed-order-details/feed-order-details";
import { getSocketStart } from "../../services/actions/socket-data";
import { useDispatch } from "../../services/types/types";
import { useEffect } from "react";
import { wsUrl } from "../../services/types/types";
import { getCookie } from "../../utile/cookie";

const FeedOrderPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = getCookie("accessToken");

  useEffect(() => {
    if (location.pathname.split("/")[2] === "orders") {
      dispatch(getSocketStart(`${wsUrl}?token=${token}`));
    } else {
      dispatch(getSocketStart(`${wsUrl}/all`));
    }
  }, []);

  const { data } = useSelector((state) => state.socket);
  let order: object | undefined;
  const params = useParams();

  order = data.orders?.find((el: any) => el._id === Object.values(params)[0]);

  return (
    data && (
      <main>
        <section className="mt-30">
          <FeedOrderDetails route={order} />
        </section>
      </main>
    )
  );
};

export default FeedOrderPage;
