import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from 'component/common/Error';
import AuthPage from 'pages/Auth';
import Exit from 'component/Exit';
import Home from 'pages/Home';
import ErrorBoundary from 'component/common/ErrorBoundary';
import { ROUTES } from 'constants/route';
import PrivateRoute from './PrivateRoutes';

const CreateRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ErrorBoundary>
        <Exit />
        <Routes>
          <Route
            path={ROUTES.home.path}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path={ROUTES.auth.path} element={<AuthPage />} />
          <Route
            path={ROUTES.notFound.path}
            element={<Error text="Страница не найдена" />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default CreateRoutes;
