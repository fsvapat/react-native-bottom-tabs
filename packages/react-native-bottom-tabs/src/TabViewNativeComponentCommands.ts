import type { HostComponent } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

export type NativeComponentRef<T> = React.ElementRef<HostComponent<T>>;
interface NativeCommands {
  blurSearch: <T>(ref: NativeComponentRef<T>) => void;
  // focusSearch: () => void;
  // blurSearch: () => void;
  // submitSearch: () => void;
  // clearSearch: () => void;

  setSearchText: <T>(ref: NativeComponentRef<T>, text: string) => void;
  // getSearchText: () => string;
  // getSearchTextLength: () => number;
  // getSearchTextPosition: () => number;
  // getSearchTextSelection: () => number;
}

export default codegenNativeCommands<NativeCommands>({
  supportedCommands: ['blurSearch', 'setSearchText'],
});
