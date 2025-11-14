import type { HostComponent } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

export type NativeComponentRef<T> = React.ElementRef<HostComponent<T>>;
interface NativeCommands {
  blurSearch: <T>(ref: NativeComponentRef<T>) => void;
  // focusSearch: () => void;

  setSearchText: <T>(ref: NativeComponentRef<T>, text: string) => void;
}

export default codegenNativeCommands<NativeCommands>({
  supportedCommands: ['blurSearch', 'setSearchText'],
});
