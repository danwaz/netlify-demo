import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      blogPosts: [],
      allPages: [],
      navheight: 60,
      blogTitle: '',
      siteInfo: [],
      connect: [],
      allTags: [],
      gridItems: [],
      gridNumPosts: '11',
      gridNumCats: '11',
      gridOffset: '0',
      theThumbnail: '',
      theCategory: '',
      theCrumb: '',
      allCats: [],
      results: [],
      resultsnum: [],
      pagination: false,
      menuIsActive: false,
      menuInitial: true
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getBlogPosts')
      },

      async getBlogPosts({ state, commit }) {
        const context = await require.context(
          '~/content/detail/',
          false,
          /\.json$/
        )

        const searchposts = await context.keys().map(key => ({
          ...context(key),
          _path: `/detail/${key.replace('.json', '').replace('./', '')}`
        }))

        commit('SET_POSTS', searchposts.reverse())
      },

      setGridNumPosts({ state, commit }) {
        if (state.blogPosts > 13) {
          this.$store.commit('SET_GRIDNUMPOSTS', 12)
        }
      },

      setGridNumCats({ state, commit }) {
        if (state.allCats > 13) {
          this.$store.commit('SET_GRIDNUMCATS', 12)
        }
      }
    },
    mutations: {
      SET_POSTS(state, data) {
        state.blogPosts = data
      },
      SET_THUMB(state, data) {
        state.theThumbnail = data
      },
      SET_TITLE(state, data) {
        state.blogTitle = data
      },
      SET_NAVHEIGHT(state, data) {
        state.navheight = data
      },
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },
      SET_RESULTS(state, data) {
        state.results = data
      },
      paginateOn(state, data) {
        state.pagination = data
      },
      paginateOff(state, data) {
        state.pagination = data
      },
      resultsLength(state, data) {
        state.resultsnum = data
      },
      setMenuState(state, menuIsActive) {
        state.menuIsActive = menuIsActive
      },
      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      }
    }
  })

export default createStore
