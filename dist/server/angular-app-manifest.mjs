
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DEMO-BUP/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 47292, hash: '59b90b4bb979c2b6715039ae23950845d99d5ec1e971397f41ea6f889df56f09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2522, hash: '4fbcd192789e0aae587b5717d1b270c687014e529ed0d4016010270b8de63551', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TJUWFZCM.css': {size: 97722, hash: '9IGeiQ44q5g', text: () => import('./assets-chunks/styles-TJUWFZCM_css.mjs').then(m => m.default)}
  },
};
