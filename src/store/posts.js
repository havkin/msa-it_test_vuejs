export default ({
   state: {
      posts: [],
   },
   mutations: {
      loadPosts (state, payload) {
         state.posts = payload;
      },
      removePost (state, payload) {
         const findItem = state.posts.findIndex( item => item.id === payload );
         state.posts.splice(findItem, 1);
      }
   },
   actions: {
      async fetchPosts ({commit}) {
         // commit('clearError');
         // commit('setLoading', true);

         const resultAds = [];

         try {

            const response = await fetch('http://jsonplaceholder.typicode.com/posts');
            // if (!response.ok) {
            //    throw new Error('Ответ сети был не ok.');
            //  }
            // const contentType = response.headers.get('content-type');
            // if (!contentType || !contentType.includes('application/json')) {
            //   throw new TypeError("Ой, мы не получили JSON!");
            // }
            const posts = await response.json();
            // console.log ( posts );
            // Object.keys(ads).forEach(key => {
            //    const ad = ads[key];
            //    resultAds.push(
            //       new Ad(
            //          ad.title,
            //          ad.description,
            //          ad.ownerId,
            //          ad.img,
            //          ad.promo,
            //          key
            //       )
            //    );
            // });
            commit('loadPosts', posts);
            // commit('setLoading', false);
         } catch (error) {
            // commit('setLoading', false);
            // commit('setError', error.message);
            throw error;
         }
      },
   },
   modules: {
   },
   getters: {
      posts (state) {
         return state.posts;
      },
      // promoAds (state) {
      //    return state.ads.filter( ad => ad.promo );
      // },
      // myAds (state, getters) {
      //    return state.ads.filter( ad => ad.ownerId === getters.user.id );
      // },
      // adById (state) {
      //    return adId => state.ads.find( ad => ad.id.toString() === adId );
      // }
   }
 });