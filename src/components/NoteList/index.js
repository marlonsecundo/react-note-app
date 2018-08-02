import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Note } from '../../components';
import styles, { metrics } from './styles';
import { connect } from 'react-redux';


export class NoteList extends Component {

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
            height: this.props.headerHeight,
        }
    }

    bottomContainerSpace = () => {
        let screenWidth = Dimensions.get("window").width - metrics.padding * 2;

        return {
            width: screenWidth,
            height: this.props.headerHeight,
        }

    }
}

const mapStateToProps = (state) => ({
    headerHeight: state.animation.headerLayout.height,
});

export default connect(mapStateToProps)(NoteList);