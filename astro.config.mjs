import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [vue({ appEntrypoint: '/src/lib/mapini' })], vite: {
        ssr: {
          noExternal: [
            'vue-yandex-maps',
                      ]
        }
      },
      output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
