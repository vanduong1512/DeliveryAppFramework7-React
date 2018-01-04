import React, { Component } from 'react';
import {
    Page, ContentBlock, FormLabel, ContentBlockTitle,
    FormInput, ListItem, List, View
} from 'framework7-react';

class FlowerOrder extends Component {
    render() {
        return (
            <View>
                <ContentBlockTitle>Phone number</ContentBlockTitle>
                <ContentBlock inner>
                    <FormInput type="number" placeholder="phone number" />
                </ContentBlock>
                <ContentBlockTitle>Place</ContentBlockTitle>
                <ContentBlock inner>
                    <FormLabel>From: </FormLabel>
                    <FormInput type="text" placeholder="From Place" />
                    <FormLabel>To: </FormLabel>
                    <FormInput type="text" placeholder="To Place" />
                </ContentBlock>
                <ContentBlockTitle>Time</ContentBlockTitle>
                <ContentBlock inner>
                    <FormLabel>From: </FormLabel>
                    <FormInput type="text" placeholder="Collection Time" />
                    <FormLabel>To: </FormLabel>
                    <FormInput type="text" placeholder="Delivery Time" />
                </ContentBlock>
                {/* <List form>
                    <ListItem smartSelect smartSelectSearchbar title="Car">
                        <select name="car" multiple="multiple" defaultValue={['honda', 'audi', 'ford']}>
                            <optgroup label="Japanese">
                                <option value="honda">Honda</option>
                                <option value="lexus">Lexus</option>
                                <option value="mazda">Mazda</option>
                                <option value="nissan">Nissan</option>
                                <option value="toyota">Toyota</option>
                            </optgroup>
                            <optgroup label="German">
                                <option value="audi">Audi</option>
                                <option value="bmw">BMW</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="vw">Volkswagen</option>
                                <option value="volvo">Volvo</option>
                            </optgroup>
                            <optgroup label="American">
                                <option value="cadillac">Cadillac</option>
                                <option value="chrysler">Chrysler</option>
                                <option value="dodge">Dodge</option>
                                <option value="ford">Ford</option>
                            </optgroup>
                        </select>
                    </ListItem>
                </List> */}
            </View>
        );
    };
}

export default FlowerOrder;