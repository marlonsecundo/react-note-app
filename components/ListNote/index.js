import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
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
                }, {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                }, {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                }, {
                    nota: "Bom sdufb saljfsd fsdjdfs fsd wefwe wef wef wfe wf wf ",
                },
            ],
        }

    }
    render() {
        return (
            <View style={styles.rootContainer}>
                <ScrollView contentContainerStyle={styles.noteContainer} >
                    {this.state.notes.map((value, key) => {
                        return (
                            <Note key={key}>
                                {value.nota}
                            </Note>)
                    })}

                </ScrollView>
            </View>
        )
    }




}

export default ListNote;