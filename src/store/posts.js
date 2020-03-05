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
      },
      addPost (state, payload) {
         state.posts.push(payload);
      }
   },
   actions: {
      async fetchPosts ({commit}) {
         commit('setLoading', true);

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

            commit('loadPosts', posts);
            commit('setLoading', false);

         } catch (error) {
            commit('setLoading', false);
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
      lastPostId (state) {
         const lastPost = state.posts[state.posts.length - 1];
         return lastPost.id;
      },

   }
 });