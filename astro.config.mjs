// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site:'https://s-panta.github.io/',
  integrations: [icon()],
  // old blog URLs moved from /post/ to /blog/
  redirects: {
    '/post': '/blog',
    '/post/multithreading_python': '/blog/multithreading_python',
    '/post/mvc_architecture': '/blog/mvc_architecture',
    '/post/true_or_false': '/blog/true_or_false',
  },
});
