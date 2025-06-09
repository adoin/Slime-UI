import type { App } from 'vue';
import { SButton, SDialog } from './components';

export { version } from './version';

const components = [SButton, SDialog];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { install };

export * from './components';

export default {
  install,
};
