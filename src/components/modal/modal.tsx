import appModalStyle from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
import { useEffect, FC, ReactNode } from "react";

const modalRoot: any = document.getElementById("modals");

type Data = { onCloseButtonClick: () => void; children: ReactNode };

const Modal: FC<Data> = ({ onCloseButtonClick, children }) => {
  const ESC_KEY_CODE = 27;

  useEffect(() => {
    const keyDown = (event: KeyboardEvent) => {
      if (event.keyCode === ESC_KEY_CODE) {
        onCloseButtonClick();
      }
    };
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onCloseButtonClick={onCloseButtonClick} />
      <div className={`pt-10 pl-10 pr-10 ${appModalStyle.modal}`}>
        <button onClick={onCloseButtonClick} className={appModalStyle.close}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
