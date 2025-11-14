import NativeTabView from './TabViewNativeComponent';
import Commands, {
  type NativeComponentRef,
} from './TabViewNativeComponentCommands';

type NativeTabViewType = typeof NativeTabView;

export type TabViewRef = NativeComponentRef<NativeTabViewType>;
class SearchManager {
  private activeTabViewRef: TabViewRef | null = null;

  /**
   * Register a TabView instance as the active one.
   * @internal
   */
  registerTabView(ref: TabViewRef | null) {
    this.activeTabViewRef = ref;
  }

  /**
   * Unregister a TabView instance as the active one.
   * @internal
   */
  unregisterTabView() {
    this.activeTabViewRef = null;
  }

  /**
   * Dismiss the search field for the currently active tab.
   * Only works if there's an active TabView with a searchable tab.
   */
  blur() {
    if (this.activeTabViewRef) {
      Commands.blurSearch(this.activeTabViewRef);
    }
  }

  /**
   * Set the search text for the currently active tab.
   * Only works if there's an active TabView with a searchable tab.
   */
  setText(text: string) {
    if (this.activeTabViewRef) {
      Commands.setSearchText(this.activeTabViewRef, text);
    }
  }
}

export const Search = new SearchManager();
