import { initializeApp } from 'firebase/app';

/**
 * Convenience method to initialize firebase app
 * https://firebase.google.com/docs/reference/js/firebase?authuser=1#initializeapp
 * @param  {Object} config - FIREBASE_CONFIG during the build process
 * @returns {App} - Creates and initializes a Firebase app instance.
 */
export const fBInit = (config) => {
    return initializeApp(config)
}