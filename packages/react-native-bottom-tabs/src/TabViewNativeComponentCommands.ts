import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

interface NativeCommands {
  blurSearch: () => void;
  // focusSearch: () => void;
  // blurSearch: () => void;
  // submitSearch: () => void;
  // clearSearch: () => void;

  // setSearchText: (text: string) => void;
  // getSearchText: () => string;
  // getSearchTextLength: () => number;
  // getSearchTextPosition: () => number;
  // getSearchTextSelection: () => number;
}

export default codegenNativeCommands<NativeCommands>({
  supportedCommands: ['blurSearch'],
});
