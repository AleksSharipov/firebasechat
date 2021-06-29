import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import {LOGIN_ROUTE, CHAT_ROUTE} from './utils/consts';


/*Маршруты для все пользователей */
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
];

/*Для залогиненых */
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
];