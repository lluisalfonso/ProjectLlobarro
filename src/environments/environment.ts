// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: 'AIzaSyCP8rn7aUxEkMoXIdWhiDwXDiAiw3bvm3M',
        authDomain: 'virtualclassroom-d806b.firebaseapp.com',
        databaseURL: 'https://virtualclassroom-d806b.firebaseio.com',
        projectId: 'virtualclassroom-d806b',
        storageBucket: 'virtualclassroom-d806b.appspot.com',
        messagingSenderId: '991164779822'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
