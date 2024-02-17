import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [vue({ appEntrypoint: '/src/lib/mapini' })], vite: {
        ssr: {
          noExternal: [
            'vue-yandex-maps',
                      ]
        }
      }
});
