import Vue from "vue";
import Vuex from "vuex";
import { AXIOS } from '../plugins/axios'
import router from "../router"

//set axios prototype
Vuex.Store.prototype.$axios = AXIOS;
Vuex.Store.prototype.$router = router;

import users from "./modules/users"
import courses from  "./modules/courses"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    courses,
  },
});
