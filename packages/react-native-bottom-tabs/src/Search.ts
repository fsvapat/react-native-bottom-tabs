import Commands from './TabViewNativeComponentCommands';

class SearchManager {
  /**
   * Dismiss the search field for the currently active tab.
   * Only works if there's an active TabView with a searchable tab.
   */
  blur() {
    Commands.blurSearch();
  }
}

export const Search = new SearchManager();
