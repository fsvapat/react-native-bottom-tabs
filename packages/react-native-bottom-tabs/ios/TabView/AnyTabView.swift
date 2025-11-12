import SwiftUI

public protocol AnyTabView: View {
  var onLayout: (_ size: CGSize) -> Void { get }
  var onSelect: (_ key: String) -> Void { get }
  var updateTabBarAppearance: () -> Void { get }
  var onSearchTextChange: (_ key: String, _ text: String) -> Void { get }
  var onSearchSubmit: (_ key: String, _ text: String) -> Void { get }
  var onSearchBlur: (_ key: String) -> Void { get }
  var onSearchFocus: (_ key: String) -> Void { get }
}
