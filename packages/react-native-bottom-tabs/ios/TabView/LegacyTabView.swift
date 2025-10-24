import SwiftUI

struct LegacyTabView: AnyTabView {
  @ObservedObject var props: TabViewProps

  var onLayout: (CGSize) -> Void
  var onSelect: (String) -> Void
  var updateTabBarAppearance: () -> Void
  var onSearchTextChange: (String) -> Void
  var onSearchSubmit: (String) -> Void
  var onSearchDismiss: () -> Void

  @ViewBuilder
  var body: some View {
    TabView(selection: $props.selectedPage) {
      ForEach(props.children) { child in
        if let index = props.children.firstIndex(of: child) {
          renderTabItem(at: index)
        }
      }
      .measureView { size in
        onLayout(size)
      }
    }
    .hideTabBar(props.tabBarHidden)
  }

  @ViewBuilder
  private func renderTabItem(at index: Int) -> some View {
    if let tabData = props.items[safe: index] {
      let isFocused = props.selectedPage == tabData.key

      if !tabData.hidden || isFocused {
        let icon = props.icons[index]
        let child = props.children[safe: index]?.view ?? PlatformView()
        let context = TabAppearContext(
          index: index,
          tabData: tabData,
          props: props,
          updateTabBarAppearance: updateTabBarAppearance,
          onSelect: onSelect
        )

        RepresentableView(view: child)
          .ignoresSafeArea(.container, edges: .all)
          .searchableModifier(
            props: props,
            onTextChange: onSearchTextChange,
            onSubmit: onSearchSubmit,
            onDismiss: onSearchDismiss
          )
          .tabItem {
            TabItem(
              title: tabData.title,
              icon: icon,
              sfSymbol: tabData.sfSymbol,
              labeled: props.labeled
            )
            .accessibilityIdentifier(tabData.testID ?? "")
          }
          .tag(tabData.key)
          .tabBadge(tabData.badge)
          .tabAppear(using: context)
      }
    }
  }
}
