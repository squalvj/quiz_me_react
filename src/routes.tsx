import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LazyComponent from './components/LazyComponent';
import { RoutePath } from './interfaces';
const routes = [
  { path: RoutePath.HOME, component: '/Home/index' },
];

function Routes() {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} exact path={route.path}>
            <LazyComponent component={React.lazy(() => import(`./pages${route.component}`))} />
          </Route>
        ))}
      </Switch>
    </React.Suspense>
  );
}

export default Routes;
