import "./modal.css";
export default function Modal({ title, content, close }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close" onClick={() => close(false)}>
          &times;
        </div>
        <div className="modal__title">{title}</div>
        <div className="modal__content">{content}</div>
        <div className="modal__footer">
          <button className="btn" onClick={() => close(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
