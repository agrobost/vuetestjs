import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";

export default boot(({ app }) => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.API);
  app.use(createPinia());
});
