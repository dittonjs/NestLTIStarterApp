import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Router } from './components/router';
import { LtiRouter } from './components/lti_router';
import { ApiContext } from './utils/api_context';
import { AuthContext } from './utils/auth_context';
import { useApi } from './utils/use_api';
import { useJwtRefresh } from './utils/use_jwt_refresh';
import { RolesContext } from './utils/roles_context';
import { parseJwt } from './utils/parse_jwt';
import { useLaunchSettings } from './utils/use_launch_settings';
import './app.css';

export const App = () => {
  const launchSettings = useLaunchSettings();
  const [authToken, setAuthToken] = useState(launchSettings.jwt);
  const [loading, setLoading] = useState(true);

  // Refresh the jwt token automatically
  useJwtRefresh(authToken, setAuthToken);

  // api instance
  const api = useApi(authToken);

  // get initial jwt using refresh token
  useEffect(() => {
    const makeRequest = async () => {
      if (launchSettings.isLTI) {
        setLoading(false);
        return;
      }
      const result = await api.get('/refresh_token');
      if (result.token) {
        setAuthToken(result.token);
      }
      setLoading(false);
    };
    makeRequest();
  }, []);

  const jwtPayload = parseJwt(authToken);

  // don't display anything while trying to get user token
  // can display a loading screen here if desired
  if (loading) return null;

  return (
    <AuthContext.Provider value={[authToken, setAuthToken]}>
      <ApiContext.Provider value={api}>
        <RolesContext.Provider value={jwtPayload.roles}>
          <HashRouter>{launchSettings.isLTI ? <LtiRouter /> : <Router />}</HashRouter>
        </RolesContext.Provider>
      </ApiContext.Provider>
    </AuthContext.Provider>
  );
};
