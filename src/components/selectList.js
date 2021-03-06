import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Checkbox from './checkbox';
import {Font} from '../services/style';

var SelectList = React.createClass({
    onSelected(item) {
        return (b) => {
            this.props.onChanged && this.props.onChanged(b ? (item.value||item) : null);
        }
    },
    render() {
        let title = this.props.titleonly ? this.props.title : (this.props.selected || this.props.title);
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}}>
                <Text style={{fontSize: this.props.titleFontSize || Font.medium(), backgroundColor: 'silver', textAlign: 'center'}}>{title}</Text>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}>
                    {this.props.items.map((item,i) => {
                        return (
                            <Checkbox key={i} label={item.label || item} labelFontSize={item.labelFontSize || this.props.itemFontSize} selected={this.props.selected==(item.value||item)} onSelected={this.onSelected(item)}/>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
});

module.exports = SelectList;
