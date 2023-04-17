function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_zoom ${card.name && "popup_opened"}`}
      onClick={onClose}
    >
      <div
        className="popup__img-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="button popup__close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__img" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
