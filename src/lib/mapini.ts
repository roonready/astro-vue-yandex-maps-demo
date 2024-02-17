import type { App } from 'vue';
import { createYmaps } from 'vue-yandex-maps';

export default (app: App) => {
    app.use(createYmaps({
        apikey: 'c7c43446-ec7e-4158-b203-8b68c766b975',
      }));
};