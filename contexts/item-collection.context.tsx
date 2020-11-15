import React from 'react';

export const ItemCollectionContext = React.createContext({currentActiveItemId: null, isItemInfoShow: null, isSliderPlay: null, setIsSliderPlay: null, setIsItemInfoShow: null, setCurrentActiveItemId: null});

/**
 * Коллекция айтемов
 */
export class ItemCollectionProvider extends React.Component {

    state = {
        currentActiveItemId: null, // выбранный айтем
        isItemInfoShow: false,
        isSliderPlay: false,
    };

    setCurrentActiveItemId = (currentActiveItemId: number) => {
        this.setState({currentActiveItemId});
    };

    setIsItemInfoShow = (currentActiveItemId: number, isItemInfoShow: boolean) => {
        this.setState({currentActiveItemId, isItemInfoShow, isSliderPlay: true});
    };

    setIsSliderPlay = (currentActiveItemId: number, isSliderPlay: boolean, ) => {
        if (currentActiveItemId === this.state.currentActiveItemId) {
            this.setState({currentActiveItemId, isSliderPlay: !this.state.isSliderPlay});
        } else {
            this.setState({currentActiveItemId, isSliderPlay, isItemInfoShow: false});
        }
    };

    render() {
        return (
            <ItemCollectionContext.Provider value={{...this.state, setCurrentActiveItemId: this.setCurrentActiveItemId, setIsItemInfoShow: this.setIsItemInfoShow, setIsSliderPlay: this.setIsSliderPlay}}>
                {this.props.children}
            </ItemCollectionContext.Provider>
        );
    }
}
