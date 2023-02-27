import TheRestoDbSource from '../../data/therestodb-source';

const Favorite = {
  async render() {
    return `
          <h2>Your Favorite Restaurant</h2>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.nowHome();
    console.log(restaurants);
    // TODO: tampilkan movies di dalam DOM
  },
};

export default Favorite;
