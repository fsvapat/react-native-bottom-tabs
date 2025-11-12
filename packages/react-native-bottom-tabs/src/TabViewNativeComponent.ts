import type { ColorValue, ProcessedColorValue, ViewProps } from 'react-native';
import type {
  DirectEventHandler,
  Double,
  Int32,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
//@ts-ignore
import type { ImageSource } from 'react-native/Libraries/Image/ImageSource';

export type OnPageSelectedEventData = Readonly<{
  key: string;
}>;

export type OnTabBarMeasured = Readonly<{
  height: Int32;
}>;

export type OnNativeLayout = Readonly<{
  width: Double;
  height: Double;
}>;

export type OnSearchTextChange = Readonly<{
  key: string;
  text: string;
}>;

export type OnSearchSubmit = Readonly<{
  key: string;
  text: string;
}>;

export type OnSearchFocus = Readonly<{
  key: string;
}>;

export type OnSearchBlur = Readonly<{
  key: string;
}>;

export type TabViewItems = ReadonlyArray<{
  key: string;
  title: string;
  sfSymbol?: string;
  badge?: string;
  activeTintColor?: ProcessedColorValue | null;
  hidden?: boolean;
  testID?: string;
  role?: string;
  preventsDefault?: boolean;
  searchable?: boolean;
  searchablePrompt?: string;
}>;

export interface TabViewProps extends ViewProps {
  items: TabViewItems;
  selectedPage: string;
  onPageSelected?: DirectEventHandler<OnPageSelectedEventData>;
  onTabLongPress?: DirectEventHandler<OnPageSelectedEventData>;
  onTabBarMeasured?: DirectEventHandler<OnTabBarMeasured>;
  onNativeLayout?: DirectEventHandler<OnNativeLayout>;
  icons?: ReadonlyArray<ImageSource>;
  tabBarHidden?: boolean;
  labeled?: boolean;
  sidebarAdaptable?: boolean;
  scrollEdgeAppearance?: string;
  barTintColor?: ColorValue;
  translucent?: WithDefault<boolean, true>;
  rippleColor?: ColorValue;
  activeTintColor?: ColorValue;
  inactiveTintColor?: ColorValue;
  disablePageAnimations?: boolean;
  activeIndicatorColor?: ColorValue;
  hapticFeedbackEnabled?: boolean;
  minimizeBehavior?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: Int32;
  onSearchTextChange?: DirectEventHandler<OnSearchTextChange>;
  onSearchSubmit?: DirectEventHandler<OnSearchSubmit>;
  onSearchFocus?: DirectEventHandler<OnSearchFocus>;
  onSearchBlur?: DirectEventHandler<OnSearchBlur>;
}

export default codegenNativeComponent<TabViewProps>('RNCTabView', {
  interfaceOnly: true,
});
