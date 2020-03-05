export default ({
   state: {
      posts: [],
      filteredPosts: [],
   },
   mutations: {
      loadPosts (state, payload) {
         state.posts = payload;
         state.filteredPosts = payload;
      },
      removePost (state, payload) {
         const findItem = state.posts.findIndex( item => item.id === payload );
         state.posts.splice(findItem, 1);
      },
      addPost (state, payload) {
         state.posts.push(payload);
      },
      filterPosts (state, payload) {
         const regexp = new RegExp(payload, "i");
         state.filteredPosts = state.posts.filter(item => {
            return (regexp.test(item.userId) || regexp.test(item.title) || regexp.test(item.body));
         });
      },
   },
   actions: {
      async fetchPosts ({commit}) {
         commit('setLoading', true);

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
         return state.filteredPosts;
      },
      lastPostId (state) {
         const lastPost = state.posts[state.posts.length - 1];
         return lastPost.id;
      },

   }
 });