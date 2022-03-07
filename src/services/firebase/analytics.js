import {
    logEvent as _logEvent,
    setUserProperties as _setUserProperties,
    setUserId as _setUserId,
    setCurrentScreen as _setCurrentScreen,
    getAnalytics as _getAnalytics
} from "firebase/analytics";

export const logEvent = (eventName, eventParams, options) => {
    _logEvent(getAnalytics(), eventName, eventParams, options);
}

export const setUserID = (userID, options) => {
    _setUserId(getAnalytics(), userID, options)
}

export const setUserProperties = (properties, options) => {
    _setUserProperties(getAnalytics(), properties, options)
}

export const setCurrentScreen = (screenName, options) => {
    _setCurrentScreen(getAnalytics(), screenName, options)
}

let analytics = null;
function getAnalytics () {
    if (analytics === null) {
        analytics = _getAnalytics()
    }
    return analytics;
}