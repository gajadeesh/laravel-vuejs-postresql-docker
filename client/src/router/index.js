import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home',
    component: () => import("../layouts/mainLayout"),
    children:[
      {
        path:"/home",
        name: "Home",
        component:() => import("../views/Home")
      }
    ]
  },
  {
    path: "/users",
    component: () => import("../layouts/mainLayout"),
    children: [
      {
        path:'',
        name: "User",
        component: () => import("../views/users/userList.vue"),
        props: {
          title: "Create User",
          pathName: "CreateUser"
        },
      },
      {
        path: "create-user",
        name: "CreateUser",
        component: () => import("../views/users/userCreate.vue"),
        props: {
          title: "Create User",
        },
      },
      {
        path: "update-user/:id",
        name: "UpdateUser",
        component: () => import("../views/users/userUpdate.vue"),
        props: (route) => ({ title: "Update User", id: route.params.id }),
      },
      {
        path: "assign-user/:id",
        name: "AssignUser",
        component: () => import("../views/users/userAssign.vue"),
        props: (route) => ({ title: "Assign Course and Results", id: route.params.id, btnText: 'Assign', btnColor: 'btn btn-info' }),
      },
      {
        path: "update-user-results/:id",
        name: "UpdateUserResults",
        component: () => import("../views/users/userAssign.vue"),
        props: (route) => ({ title: "Update Results", id: route.params.id, btnText: 'Update',btnColor: 'btn btn-warning' }),
      },
      {
        path: "result-user/:id",
        name: "ResultUser",
        component: () => import("../views/users/userResult.vue"),
        props: (route) => ({ title: "User Results", id: route.params.id }),
      },
    ],
  },
  {
    path: "/courses",
    component: () => import("../layouts/mainLayout"),
    children: [
      {
        path:'',
        name: "Course",
        component: () => import("../views/courses/courseList.vue"),
        props: {
          title: "Create Course",
          pathName: "CreateCourse"
        },
      },
      {
        path: "create-course",
        name: "CreateCourse",
        component: () => import("../views/courses/courseCreate.vue"),
        props: {
          title: "Create Course",
        },
      },
      {
        path: "update-course/:id",
        name: "UpdateCourse",
        component: () => import("../views/courses/courseUpdate.vue"),
        props: (route) => ({ title: "Update User", id: route.params.id }),
      },
    ],
  },
  {
    path: "*",
    redirect: "/not-found",
    component: () => import("@/layouts/mainLayout"),
    children: [
      {
        path: "not-found",
        name: "NotFound",
        component: () => import("@/views/not-found"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
