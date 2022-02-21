import { API } from "@/helpers/constants";

const state = {
  users: [],
  allusers:[],
  user: {},
  loading: false,
  onSave: false,
  onUpdate: false,
  onDelete: false,
};
const getters = {
  users: (state) => state.users,
  allusers: (state) => state.allusers,
  user: (state) => state.user,
  loading: (state) => state.loading,
};
const actions = {
  // Get user list
  getUsers({ commit }) {
    commit("SET_LOADING", true);
    this.$axios
      .get(API.USERS.GET_USERS)
      .then((res) => {
        setTimeout(() => {
          commit("SET_USERS", res.data.data);
          commit("SET_LOADING", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_LOADING", false);
      });
  },

  //Get all users
  getAllUsers({ commit }) {
    commit("SET_LOADING", true);
    this.$axios
      .get(API.USERS.GET_USER_ALL)
      .then((res) => {
        setTimeout(() => {
          commit("SET_USERS_ALL", res.data.data);
          commit("SET_LOADING", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_LOADING", false);
      });
  },

  //Update Results
  updateUserResults({ commit },{id, payload}) {
    commit("SET_ON_UPDATE", true);
    this.$axios
      .put(API.USERS.UPDATE_USER_RESULT(id), payload)
      .then((res) => {
        setTimeout(() => {
          this.$router.push(`/result-user/${id}`);
          commit("SET_ON_UPDATE", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_ON_UPDATE", false);
      });
  },

  // Get user
  getUser({ commit }, id) {
    commit("SET_LOADING", true);
    this.$axios
      .get(API.USERS.GET_USER(id))
      .then((res) => {
        setTimeout(() => {
          commit("SET_USER", res.data.data);
          commit("SET_LOADING", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_LOADING", false);
      });
  },

  //Create User
  createUser({ commit }, data) {
    commit("SET_ON_SAVE", true);
    this.$axios
      .post(API.USERS.CREATE_USER, data)
      .then((res) => {
        setTimeout(() => {
          this.$router.push("/users");
          commit("SET_ON_SAVE", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_ON_SAVE", false);
      });
  },

  //Update User
  updateUser({ commit }, { id, payload }) {
    commit("SET_ON_UPDATE", true);
    this.$axios
      .put(API.USERS.UPDATE_USER(id), payload)
      .then((res) => {
        setTimeout(() => {
          this.$router.push("/");
          commit("SET_ON_UPDATE", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_ON_UPDATE", false);
      });
  },
  //Update User
  deleteUser({ commit }, id) {
    commit("SET_ON_DELETE", true);
    this.$axios
      .delete(API.USERS.DELETE_USER(id))
      .then((res) => {
          location.reload();
          commit("SET_ON_DELETE", false);
      })
      .catch(() => {
        commit("SET_ON_DELETE", false);
      });
  },

  //assign user a course and result
  assignUser({ commit }, data) {
    // console.log(data);
    commit("SET_ON_SAVE", true);
    this.$axios
      .post(API.USERS.ASSIGN_USER_COURSE, data)
      .then((res) => {
        setTimeout(() => {
          this.$router.push("/users");
          commit("SET_ON_SAVE", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_ON_SAVE", false);
      });
  },

};
const mutations = {
  SET_USERS_ALL: (state, data) => {
    state.allusers = data;
  },
  SET_USERS: (state, data) => {
    state.users = data;
  },
  SET_USER: (state, data) => {
    state.user = data;
  },
  SET_LOADING: (state, data) => {
    state.loading = data;
  },
  SET_ON_SAVE: (state, data) => {
    state.onSave = data;
  },
  SET_ON_UPDATE: (state, data) => {
    state.onUpdate = data;
  },
  SET_ON_DELETE: (state, data) => {
    state.onDelete = data;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
