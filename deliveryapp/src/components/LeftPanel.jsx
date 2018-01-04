import React, { Component, } from 'react';

import {
    Panel, View, Pages, Page, Navbar,ContentBlock, ContentBlockTitle, List,
    ListItem,
} from 'framework7-react';

class LeftPanel extends Component {
    render() {
        return (
            <Panel left reveal layout="dark">
                <View id="left-panel-view" navbarThrough dynamicNavbar="true">
                    <Pages>
                        <Page>
                            <Navbar title="Left Panel"></Navbar>
                            <ContentBlock inner>
                                <p>Left panel content goes here</p>
                            </ContentBlock>
                            <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                            <List>
                                <ListItem  title="Order Flower"></ListItem>
                                <ListItem link="/form/" title="Form"></ListItem>
                            </List>
                            <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                            <List>
                                <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
                                <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
                            </List>
                        </Page>
                    </Pages>
                </View>
            </Panel>
        );
    };
}

export default LeftPanel;