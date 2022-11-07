import { useLaunchSettings } from '../../../utils/use_launch_settings';

export const Assignment = () => {
  const launchSettings = useLaunchSettings();
  return <div>Example Assignment: {launchSettings.ltiLaunchConfig.config.exampleData}</div>;
};
