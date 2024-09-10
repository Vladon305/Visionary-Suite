import { AppRouter } from './app/router';

const App = () => {
  const routerElement = AppRouter();

  if (routerElement === undefined) {
    return null;
  }

  return routerElement;
};

export default App;
