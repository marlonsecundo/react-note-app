import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Note } from '../../components';
import styles, { metrics } from './styles';


export class ListNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
                {
                    nota: "Olá sdsdfsdffsdf",
                },
                {
                    nota: "Olá sdsdfsdffsdf",
                },
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
                {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
                {
                    nota: "Lucca é derrotado",
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.rootContainer}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.noteContainer} >
                    <View style={this.topContainerSpace()}></View>
                    {this.state.notes.map((value, key) => {
                        return (
                            <Note key={key}>
                                {value.nota}
                            </Note>)
                    })}
                    <View style={this.bottomContainerSpace()}></View>

                </ScrollView>
            </View>
        )
    }

    topContainerSpace = () => {
        let screenWidth = Dimensions.get("window").width - metrics.padding * 2;
        return {
            width: screenWidth,
            height: this.props.heightSpace.header,
        }
    }

    bottomContainerSpace = () => {
        let screenWidth = Dimensions.get("window").width - metrics.padding * 2;

        console.log("Agora: " + this.props.heightSpace.footer);

        return {
            width: screenWidth,
            height: this.props.heightSpace.footer,
        }

    }




}

export default ListNote;