import firebaseServices from "../../services/firebase";

export const trackEvent = (eventName, eventParams, options) => {
    console.log(`trackerManager.js - trackEvent() - eventName=${eventName}, params=${eventParams}`)
    firebaseServices.logEvent(eventName, eventParams, options);
}

export const setUserID = (userID, options) => {
    firebaseServices.setUserId(userID, options)
}

export const setUserProperties = (properties, options) => {
    firebaseServices.setUserProperties(properties, options)
}

export const setCurrentScreen = (screenName, options) => {
    firebaseServices.setCurrentScreen(screenName, options)
}