export const API = {
  USERS: {
    GET_USERS: `/users`,
    GET_USER_ALL: `/users/all`,
    GET_USER: (id) => `/users/${id}`,
    CREATE_USER: `/users`,
    ASSIGN_USER_COURSE: '/users/course/assign',
    UPDATE_USER: (id) => `/users/${id}`,
    DELETE_USER: (id) => `/users/${id}`,
    UPDATE_USER_RESULT:(id) => `/users/course/result/${id}`
    
  },
  COURSES: {
    GET_COURSES: `/courses`,
    GET_COURSES_ALL: `/courses/all`,
    GET_COURSE: (id) => `/courses/${id}`,
    CREATE_COURSES: `/courses`,
    
    UPDATE_COURSES: (id) => `/courses/${id}`,
    DELETE_COURSES: (id) => `/courses/${id}`
  },
};
