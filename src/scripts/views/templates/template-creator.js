import CONFIG from '../../globals/config';
// import API_ENDPOINT from "../../globals/api-endpoint";

const createRestoDetailTemplate = (resto) => `
  <h1>Detail Restaurant<h1>
  <h2 class="detail__title">${resto.name}</h2>
  <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}" alt="${resto.name}" />
  <div class="detail__info">
  <h3>Information</h3>
    <h4>Kota : ${resto.city}</h4>
    <h4>Alamat : ${resto.address}</h4>
    <h4>Rating : ${resto.rating}</h4>
    <h4>Menu</h4>
    <h5>Makanan</h5>
    <span><p>${resto.menus.foods
    .map((food) => food.name).join(', ')}</p>
      </span>
    <h5>Minuman</h5>
    <span><p>${resto.menus.drinks
    .map((drink) => drink.name).join(', ')}</p>
      </span>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
    <div class="reviews">
    <h2>Review</h2>
    <div class="review-list">${resto.customerReviews
    .map((reviews) => `
      <div class="review-item">
      <p class="review-date">${reviews.date}</p>
        <p class="review-user">${reviews.name}</p>
        <p class="review-text">${reviews.review}</p>
      </div>`).join('')}
    </div>
`;

const createRestoItemTemplate = (restos) => `
    <div class="post-list">
      <img class="post-item"
        src="${restos.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + restos.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
        alt="${restos.name}">
      <div class="post-content">
        <ul class="post-item-content">
          <li class="city">Kota <span>${restos.city}<span</li>
          <li class="rating">⭐️ <span>${restos.rating}<span</li>
        </ul>
        <h3 class="post-title">
          <a href="/#/detail/${restos.id}">${restos.name}</a></h3>
          <p class="post-description">${restos.description.substring(0, 100)}...</p>
      </div>
    </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
