import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import WithRestoService from "../hoc/";
import {menuLoaded, menuRequested, menuNotLoaded} from "../../actions"
import Spinner from "../spinner";
import Error from "../error";
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems() 
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuNotLoaded(error));
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (loading) {
            return <ul className="menu__list"><Spinner/></ul>
        }
        if (error) {
            return <ul className="menu__list"><Error/></ul>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu)) 
//         }
//     }
// }

const mapDispatchToProps = {
    menuLoaded, 
    menuRequested,
    menuNotLoaded
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));