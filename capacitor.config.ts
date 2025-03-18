import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Words',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      resize: 'ionic', // или 'ionic'
      scrollAssist: true,
      scrollPadding: true
    },
    SplashScreen: {
      launchShowDuration: 0,
      launchFadeOutDuration: 0,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_CENTER",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  }
};

export default config;
