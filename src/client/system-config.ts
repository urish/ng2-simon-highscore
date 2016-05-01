const barrels: string[] = [
  'app',
  'app/shared',
  'app/simon-highscore',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  map: {
    firebase: 'vendor/firebase/lib/firebase-web.js',
    angularfire2: 'vendor/angularfire2'
  },
  packages: Object.assign({
    angularfire2: {
      defaultExtension: 'js',
      main: 'angularfire2.js'
    }
  }, createPackageConfig(barrels))
};
