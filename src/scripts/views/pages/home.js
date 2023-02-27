import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <div class="latest">
      <h2 class="latest-label">Explore Restaurant</h2>
      </div>
      <div id="posts" class="posts"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.nowHome();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
