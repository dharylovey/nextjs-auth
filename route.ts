/**
 * Public Routes
 */

export const publicRoutes = [
    '/'
]

/**
 * Authenticated users
 */

export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error'
]

/**
 * always allow  users to this routes
 */

export const apiAuthPrefix = '/api/auth';


/**
 * default redirect after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'