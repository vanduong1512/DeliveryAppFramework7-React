import React, { Component } from 'react';
import {
    Page, Views, View, Pages, Navbar, NavLeft, Link,
    NavCenter, ContentBlock,
} from 'framework7-react';

import LeftPanel from '../components/LeftPanel'
import LoadProducts from '../components/Product'
import ListRouteProduct from '../components/ListRouteProduct'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <LeftPanel />
                <Views>
                    <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
                        <Pages>
                            <Page>
                                <Navbar>
                                    <NavLeft>
                                        <Link icon="icon-bars" openPanel="left" />
                                    </NavLeft>
                                    <NavCenter sliding>Delivery App</NavCenter>
                                </Navbar>
                                <ContentBlock>
                                    <LoadProducts link="/OrderFlower/" path={ListRouteProduct[0].path} />
                                    <LoadProducts path={ListRouteProduct[1].path} />
                                    <LoadProducts path={ListRouteProduct[2].path} />
                                    <LoadProducts path={ListRouteProduct[3].path} />
                                    <LoadProducts path={ListRouteProduct[4].path} />
                                    <LoadProducts path={ListRouteProduct[5].path} />
                                    <LoadProducts path={ListRouteProduct[6].path} />
                                </ContentBlock>
                            </Page>
                        </Pages>
                    </View>
                </Views>
            </Page>
        );
    };
};

export default HomePage;