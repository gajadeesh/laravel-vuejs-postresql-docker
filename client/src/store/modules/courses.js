import { API } from "../../helpers/constants";


const state = {
  courses: [],
  allcourses: [],
  course: {},
  loading: false,
  onSave: false,
  onUpdate: false,
  onDelete: false,
};
const getters = {
  courses: (state) => state.courses,
  allcourses: (state) => state.allcourses,
  course: (state) => state.course,
  loading: (state) => state.loading,
};
const actions = {
  // Get user list
  getCourses({ commit }) {
    commit("SET_LOADING", true);
    this.$axios.get(API.COURSES.GET_COURSES)
      .then((res) => {
        setTimeout(() => {
          commit("SET_COURSES", res.data.data);
          commit("SET_LOADING", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_LOADING", false);
      });
  },

  // Get all Courses
  getAllCourses({ commit }) {
    this.$axios
    .get(API.COURSES.GET_COURSES_ALL)
    .then((res) => {
      setTimeout(() => {
        commit("SET_COURSES_ALL", res.data.data);
      }, 500);
    })
    .catch(() => {
      commit("SET_LOADING", false);
    });
  },

  // Get user
  getCourse({ commit }, id) {
    commit("SET_LOADING", true);
    this.$axios
      .get(API.COURSES.GET_USER(id))
      .then((res) => {
        setTimeout(() => {
          commit("SET_COURSE", res.data);
          commit("SET_LOADING", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_LOADING", false);
      });
  },

  //Create User
  createCourse({ commit }, data) {
    console.log(data);
    commit("SET_ON_SAVE", true);
    this.$axios
      .post(API.COURSES.CREATE_COURSES, data)
      .then((res) => {
        setTimeout(() => {
          this.$router.push("/courses");
          commit("SET_ON_SAVE", false);
        }, 500);
      })
      .catch(() => {
        commit("SET_ON_SAVE", false);
      });
  },

  // //Update User
  // updateCourse({ commit }, { id, payload }) {
  //   commit("SET_ON_UPDATE", true);
  //   this.$axios
  //     .patch(API.COURSES.UPDATE_USER(id), payload)
  //     .then((res) => {
  //       setTimeout(() => {
  //         this.$router.push("/");
  //         commit("SET_ON_UPDATE", false);
  //       }, 500);
  //     })
  //     .catch(() => {
  //       commit("SET_ON_UPDATE", false);
  //     });
  // },
  // //Update User
  // deleteCourse({ commit }, id) {
  //   commit("SET_ON_DELETE", true);
  //   this.$axios
  //     .delete(API.COURSES.DELETE_USER(id))
  //     .then((res) => {
  //       location.reload();
  //       commit("SET_ON_DELETE", false);
  //     })
  //     .catch(() => {
  //       commit("SET_ON_DELETE", false);
  //     });
  // },
};
const mutations = {
  SET_COURSES_ALL: (state, data) => {
    state.allcourses = data;
  },
  SET_COURSES: (state, data) => {
    state.courses = data;
  },
  SET_COURSE: (state, data) => {
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
