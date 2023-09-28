import { Fragment } from "react";

// const cities = ['ktm', 'btl'];

// const [firstCity, secondCity] = names;

export function Modal({
  isModalOpen,
  handleCloseModal,
}: {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}) {
  return (
    <div className="modal-container">
      {isModalOpen ? (
        <Fragment>
          <h1>Personal Detail Form</h1>
          <div>
            <button type="button" onClick={handleCloseModal}>
              Close Modal
            </button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}
