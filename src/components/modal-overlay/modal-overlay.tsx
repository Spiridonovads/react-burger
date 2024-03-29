import { FC } from "react";
import appModalOverlayStyle from "./modal-overlay.module.css";

type State = { onCloseButtonClick: () => void };

const ModalOverlay: FC<State> = ({ onCloseButtonClick }) => {
  return (
    <div
      onClick={onCloseButtonClick}
      className={appModalOverlayStyle.wrapper}
    />
  );
};

export default ModalOverlay;
