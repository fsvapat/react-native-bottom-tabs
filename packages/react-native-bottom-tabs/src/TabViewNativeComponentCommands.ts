import type { HostComponent } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import TabViewNativeComponent from './TabViewNativeComponent';

interface NativeCommands {
  dismissSearch: (
    viewRef: React.ElementRef<HostComponent<typeof TabViewNativeComponent>>
  ) => void;
}

export default codegenNativeCommands<NativeCommands>({
  supportedCommands: ['dismissSearch'],
});
