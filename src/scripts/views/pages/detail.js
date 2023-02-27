import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail">
      <h3>Detail Restaurant<h3>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('#detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};

export default Detail;
