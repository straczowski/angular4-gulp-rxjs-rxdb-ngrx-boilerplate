/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'lib/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      //'traceur':                      'npm:traceur/src/traceur.js',
      'rxjs':                      'npm:rxjs',
      //'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@ngrx/core':                'npm:@ngrx/core',
      '@ngrx/store':               'npm:@ngrx/store',

      //RxDB Dependencies
      /*'rxdb':                     'npm:rxdb',
      'object-path':              'npm:object-path/index.js',
      'random-token':             'npm:random-token/index.js',
      'clone':                    'npm:clone/clone.js',
      'is-my-json-valid':         'npm:is-my-json-valid/index.js',
      'pouchdb-core':             'npm:pouchdb-core/lib/index.js',
      'pouchdb-find':             'npm:pouchdb-find/lib/index.js',
      ...*/
      
      //plugins
      'text':                      'npm:systemjs-plugin-text/text.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },
      '@ngrx/core': {
        main: 'bundles/core.umd.js',
        defaultExtension: 'js'
      },
      '@ngrx/store': {
        main: 'bundles/store.umd.js',
        defaultExtension: 'js'
      },
      rxdb: {
        main: '/dist/lib/index.js',
        defaultExtension: 'js'

      }
    }
  });
})(this);
