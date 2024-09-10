export enum Routes {
  Home = '/',
  Auth = 'auth',
  TaskMaster = 'task-master',
  EconoEye = 'econo-eye',
  DreamTime = 'dream-time',
}

export const routes = {
  // Аутентификация
  home: Routes.Home,
  auth: '/' + Routes.Auth,
  taskMaster: Routes.TaskMaster,
  econoEye: Routes.EconoEye,
  dreamTime: Routes.DreamTime,
};
