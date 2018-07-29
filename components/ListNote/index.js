import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Note } from '../../components';
import styles, { metrics } from './styles';
import AutoResponsive from 'autoresponsive-react-native';

const screenWidth = Dimensions.get('window').width - metrics.padding * 2;

export class ListNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                    width: 0,
                    height: 0,
                },
                {
                    nota: "Olá sdsdfsdffsdf",
                    width: 0,
                    height: 0,
                },
                {
                    nota: "Olá",
                    width: 0,
                    height: 0,
                },
                {
                    nota: "Odwdweyfhweflá",
                    width: 0,
                    height: 0,
                }, {
                    nota: "Olá",
                    width: 0,
                    height: 0,
                }, 
                {
                    nota: "Olá",
                    width: 0,
                    height: 0,
                },
                {
                    nota: "Test tes ttt  tees test",
                    width: 0,
                    height: 0,
                },
                {
                    nota: "Olá",
                    width: 0,
                    height: 0,
                },
            ],
        }

    }
    render() {
        return (
            <View style={styles.rootContainer}>
                <ScrollView style={styles.container}>
                    <AutoResponsive {...this.getAutoResponsiveProps()}>
                        {this.renderNotes()}
                    </AutoResponsive>
                </ScrollView>
            </View>
        )
    }

    renderNotes() {
        return this.state.notes.map((value, key) => {
            return (
                <View key={key} style={this.containerNoteStyle(key)}>
                    <Note id={key} onMount={(event) => { this.updateLayout(event); }}>
                        {value.nota}
                    </Note>
                </View>)
        });
    }

    containerNoteStyle = (key) => {
        style = {
            width: this.state.notes[key].width,
            height: this.state.notes[key].height
        }
        return style;
    }

    updateLayout(event) {
        data = [...this.state.notes];

        data[event.id].width = event.width;
        data[event.id].height = event.height;

        this.setState({ notes: [...data] });
    }

    getAutoResponsiveProps() {
        return {
            itemMargin: metrics.padding,
            closeAnimation: true,
            containerWidth: screenWidth,
        };
    }


}

export default ListNote;