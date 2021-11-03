import * as React from 'react';
declare const _default: React.ComponentType<Pick<import("../../src/utils/createTabNavigator").NavigationViewProps & {
    getAccessibilityRole: (props: {
        route: import("react-navigation").NavigationRoute<import("react-navigation").NavigationParams>;
    }) => "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "header" | "summary" | "imagebutton" | undefined;
    getAccessibilityStates: (props: {
        route: import("react-navigation").NavigationRoute<import("react-navigation").NavigationParams>;
        focused: boolean;
    }) => import("react-native").AccessibilityState[];
    lazy?: boolean | undefined;
    tabBarComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    tabBarOptions?: import("../../src/types").BottomTabBarOptions | undefined;
    navigation: import("../../src").NavigationTabProp<import("react-navigation").NavigationRoute<import("react-navigation").NavigationParams>, import("react-navigation").NavigationParams>;
    descriptors: import("../../src/types").SceneDescriptorMap;
    screenProps?: unknown;
    position?: "top" | "bottom" | undefined;
}, "navigation" | "descriptors" | "screenProps" | "position" | "getAccessibilityRole" | "getAccessibilityStates" | "lazy" | "tabBarComponent" | "tabBarOptions"> & {
    navigationConfig: any;
}>;
export default _default;
