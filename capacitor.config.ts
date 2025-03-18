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
    }
  }
};

export default config;
