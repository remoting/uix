import { createApp, h, resolveComponent } from "vue"
import HttpPlugin from './common/http.js'
import ElementPlus from 'element-plus'
import createRouter from './routers/index.js'
  
export default function(config){
  const app = createApp({
    render: () => {
        return h(resolveComponent('router-view'))
    }
  });
  
  
  app.use(HttpPlugin);
  app.use(ElementPlus);
  app.use(createRouter(config));
  return app;
}