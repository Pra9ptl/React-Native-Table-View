import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flex_View = () => {

    createCell = () => {
        let cells = []

        for (let i = 0; i < 21; i++) {
            cells.push(<Text style= {[design.f_text, {backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'}]}>{i+1}</Text>)
        }
        return cells
    }
    return (
        <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start',justifyContent: 'space-evenly',width: '100%',height: '100%',alignSelf: 'center',flexWrap: 'wrap',}}>
            {this.createCell()}
        </View>
    );
};

  
const design = StyleSheet.create ({
    f_text: {
        textAlign: 'center',
        borderWidth: 1,
        paddingVertical: 20,
        width: '33.3%',
    },
});

export default Flex_View;
