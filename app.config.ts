import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'q2-agenda-ui-app',
  slug: 'q2-agenda-ui-app',
  extra: {
    eas: {
      projectId: "9f594bcd-c567-4aeb-97ca-40b59d68c455"
    }
  }
};

export default config;
