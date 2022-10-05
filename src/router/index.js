import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Login.vue";
import SignUpView from "../views/SignUp.vue";
import Lists from "@/views/Lists";
import Todo from "@/views/Todo";
import NotFoundView from "../views/NotFound.vue";
import ForgetPasswordView from "../views/ForgetPass.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/lists",
    name: "lists",
    component: Lists,
  },
  {
    path: "/todos",
    name: "todos",
    component: Todo,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPasswordView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
