// path: ./config/middlewares.js

module.exports = [
  // The array is pre-populated with internal, built-in middlewares, prefixed by `strapi::`
  'strapi::errors',
  'strapi::security',
  'strapi::cors',

  // custom middleware that does not require any configuration
  'my-custom-node-module', 

  // custom name to find a package or a path
  {
    name: 'my-custom-node-module',
    config: {
      foo: 'bar',
    },
  },

  // custom resolve to find a package or a path
  {
    resolve: '../some-dir/custom-middleware',
    config: {
      foo: 'bar',
    },
  },

  // custom configuration for internal middleware
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Some awesome company',
    },
  },

  // remaining internal & built-in middlewares
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
