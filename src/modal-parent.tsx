import { useState } from "react";
import mainStyles from "./main.module.css";
import { Modal } from "./modal";

export function ModalParent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return isModalOpen ? (
    <div className={mainStyles.modalParent}>
      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </div>
  ) : (
    <button type="button" onClick={handleOpenModal}>
      Open Modal
    </button>
  );
}
