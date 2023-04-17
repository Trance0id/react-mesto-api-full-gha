import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Card from "./Card.js";

function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Данные профиля">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <button
            type="button"
            className="profile__avatar-button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="button profile__edit-button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="button profile__add-button"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards" aria-label="Карточки профиля">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
