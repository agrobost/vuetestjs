import { boot } from 'quasar/wrappers'
import firebaseServices from '../services/firebase'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  //console.log(firebaseServices);
  const firebase_app = firebaseServices.fBInit(process.env.QENV.FIREBASE_CONFIG)  // Validation that our service structure is working
  // with an initialize Firebase application and auth instance.
  // console.log('Firebase App Instantiation:', firebase_app)
  // console.log('Firebase Auth Module:', firebaseServices.auth())
})
