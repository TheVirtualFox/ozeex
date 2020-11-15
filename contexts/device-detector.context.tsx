import React from 'react';

export const DeviceDetectorContext = React.createContext({isMobile: null, isIe: null});

interface DeviceDetectorProviderValues {
    isMobileView: boolean,
    isIeView: boolean,
}

/**
 * Контекст информация о устройстве клмента из userAgent
 */
export class DeviceDetectorProvider extends React.Component<DeviceDetectorProviderValues> {
    render() {
        return (
            <DeviceDetectorContext.Provider value={{isMobile: this.props.isMobileView, isIe: this.props.isIeView}}>
                {this.props.children}
            </DeviceDetectorContext.Provider>
        );
    }
}
