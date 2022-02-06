import './Modal.css';

function Modal({ children, close }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        { children }
        <hr />
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Modal;