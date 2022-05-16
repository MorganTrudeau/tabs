import * as React from 'react';
import { AccessibilityRole, AccessibilityState } from 'react-native';
import { NavigationRoute } from 'react-navigation';
import { NavigationViewProps } from '../utils/createTabNavigator';
import { NavigationTabProp, NavigationBottomTabOptions, BottomTabBarOptions, SceneDescriptorMap } from '../types';
declare type Props = NavigationViewProps & {
    getAccessibilityRole: (props: {
        route: NavigationRoute;
    }) => AccessibilityRole | undefined;
    getAccessibilityStates: (props: {
        route: NavigationRoute;
        focused: boolean;
    }) => AccessibilityState[];
    lazy?: boolean;
    tabBarComponent?: React.ComponentType<any>;
    tabBarOptions?: BottomTabBarOptions;
    navigation: NavigationTabProp;
    descriptors: SceneDescriptorMap;
    screenProps?: unknown;
    position?: 'top' | 'bottom';
};
type TabConfig = {
    tabBarComponent?: React.ComponentType<any>;
    tabBarOptions?: BottomTabBarOptions;
}
declare const _default: (routes: import("react-navigation").NavigationRouteConfigMap<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<import("react-navigation").NavigationParams>, any>>, config?: TabConfig & import("react-navigation").CreateNavigatorConfig<{}, import("react-navigation").NavigationTabRouterConfig, Partial<NavigationBottomTabOptions>, NavigationTabProp<NavigationRoute<import("react-navigation").NavigationParams>, any>> | undefined) => React.ComponentType<Pick<Props, "navigation" | "descriptors" | "screenProps" | "position" | "getAccessibilityRole" | "getAccessibilityStates" | "lazy" | "tabBarComponent" | "tabBarOptions"> & {
    navigationConfig: any;
}>;
export default _default;
