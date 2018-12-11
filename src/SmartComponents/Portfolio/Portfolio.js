import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Section, PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { css } from '@patternfly/react-styles';
import { Stack, StackItem } from '@patternfly/react-core';
import ContentGallery from '../../SmartComponents/ContentGallery/ContentGallery';
import { fetchSelectedPortfolio, fetchPortfolioItemsWithPortfolio } from '../../Store/Actions/PortfolioActions';
import { hideModal, showModal } from '../../Store/Actions/MainModalActions';
import { consoleLog } from '../../Helpers/Shared/Helper';
import MainModal from '../Common/MainModal';
import AddProductsToPortfolio from '../../SmartComponents/Portfolio/AddProductsToPortfolio';
import PortfolioFilterToolbar from '../../PresentationalComponents/Portfolio/PortfolioFilterToolbar';
import PortfolioActionToolbar from '../../PresentationalComponents/Portfolio/PortfolioActionToolbar';

import './portfolio.scss';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioId: '',
            isKebabOpen: false,
            isOpen: false,
            filteredItems: []
        };
        consoleLog('Portfolio props: ', props);
    }

    fetchData(apiProps) {
        this.props.fetchSelectedPortfolio(apiProps);
        this.props.fetchPortfolioItemsWithPortfolio(apiProps);
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData(this.props.match.params.id);
        }
    }

    onClickEditPortfolio = (event) => {
        this.props.showModal({
            open: true,
            itemdata: this.props,
            closeModal: this.props.hideModal
        }, 'editportfolio');

        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    };

    onClickAddProducts = (event) => {
        this.props.history.push(this.props.location.pathname + `/addproducts`);
    };

    filterItems = (filterValue) => {
        let filteredItems = [];
        if (this.props.portfolioItems && this.props.portfolioItems.portfolioItems) {
            filteredItems = this.props.portfolioItems.portfolioItems;
            filteredItems = filteredItems.filter((item) => {
                let itemName = item.name.toLowerCase();
                return itemName.indexOf(
                    filterValue.toLowerCase()) !== -1;
            });
        }

        return filteredItems;
    };

    render() {
        let filteredItems = {
            items: this.props.portfolioItems.portfolioItems,
            isLoading: this.props.isLoading
        };
        let title = this.props.portfolio ? this.props.portfolio.name : '';
        return (
            <Section>
                <PortfolioFilterToolbar />
                { (!this.props.isLoading) && <div style={ { marginTop: '15px', marginLeft: '25px', marginRight: '25px' } }>
                    <PortfolioActionToolbar title={ title } onClickEditPortfolio={ this.onClickEditPortfolio } onClickAddProducts = { this.onClickAddProducts } filterItems={ this.filterItems }/>
                </div> }
                <ContentGallery { ...filteredItems } />
                <MainModal />
            </Section>
        );
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.PortfolioStore.selectedPortfolio,
        portfolioItems: state.PortfolioStore.portfolioItems,
        isLoading: state.PortfolioStore.isLoading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPortfolioItemsWithPortfolio: apiProps => dispatch(fetchPortfolioItemsWithPortfolio(apiProps)),
        fetchSelectedPortfolio: apiProps => dispatch(fetchSelectedPortfolio(apiProps)),
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }));
        }
    };
};

Portfolio.propTypes = {
    isLoading: propTypes.bool,
    fetchPortfolioItemsWithPortfolio: propTypes.func,
    fetchSelectedPortfolio: propTypes.func,
    showModal: propTypes.func,
    hideModal: propTypes.func,
    history: propTypes.object,
    onClickEditPortfolio: propTypes.func
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Portfolio)
);
