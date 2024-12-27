
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 47284, hash: '0925286ebab78a4aa388f5349453052fcb7366af9aaafc94d393d6c85cb8fef2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2514, hash: '934a1f7f8a7ed9133ccf599cf0aff3e9dd43a0169bbaf5801b5e6c2a7e37508a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TJUWFZCM.css': {size: 97722, hash: '9IGeiQ44q5g', text: () => import('./assets-chunks/styles-TJUWFZCM_css.mjs').then(m => m.default)}
  },
};
