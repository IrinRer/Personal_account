import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from 'component/common/Error';
import AuthPage from 'pages/Auth';
import { useAuth } from 'hooks/useAuth';
import Header from 'component/Header';
import Home from 'pages/Home';
import ErrorBoundary from 'component/common/ErrorBoundary';
import { ROUTES } from 'constants/route';
import PrivateRoute from './PrivateRoutes';

const CreateRoutes: React.FC = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <ErrorBoundary>
        {isAuth ? <Header /> : null}
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
            element={<Error text="Not Found" />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default CreateRoutes;
