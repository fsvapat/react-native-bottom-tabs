import SwiftUI

public protocol AnyTabView: View {
  var onLayout: (_ size: CGSize) -> Void { get }
  var onSelect: (_ key: String) -> Void { get }
  var updateTabBarAppearance: () -> Void { get }
  var onSearchTextChange: (_ text: String) -> Void { get }
  var onSearchSubmit: (_ text: String) -> Void { get }
  var onSearchDismiss: () -> Void { get }
}
