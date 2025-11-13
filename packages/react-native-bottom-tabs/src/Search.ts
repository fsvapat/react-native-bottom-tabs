import type { HostComponent } from 'react-native';
import TabViewNativeComponent from './TabViewNativeComponent';
import Commands from './TabViewNativeComponentCommands';

type TabViewRef = React.ElementRef<
  HostComponent<typeof TabViewNativeComponent>
>;

class SearchManager {
  private activeTabViewRef: TabViewRef | null = null;

  /**
   * Register a TabView instance as the active one.
   * Called automatically when TabView mounts.
   * @internal
   */
  registerTabView(ref: TabViewRef | null) {
    this.activeTabViewRef = ref;
  }

  /**
   * Dismiss the search field for the currently active tab.
   * Only works if there's an active TabView with a searchable tab.
   */
  dismiss() {
    if (this.activeTabViewRef) {
      Commands.dismissSearch(this.activeTabViewRef);
    }
  }
}

export const Search = new SearchManager();
