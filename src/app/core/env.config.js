import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'nRO6fLz2Fcduhv4rvO0JbDRGw17rWwzQ',
  CLIENT_DOMAIN: 'aabiro.auth0.com',
  AUDIENCE: '[YOUR_AUTH0_API_AUDIENCE]', // likely http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
