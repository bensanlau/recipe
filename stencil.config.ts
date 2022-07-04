import { Config } from '@stencil/core';
import { inlineSvg } from 'stencil-inline-svg';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: '/',
    },
  ],
  plugins: [inlineSvg()],
};
