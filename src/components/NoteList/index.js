import React, { Component } from 'react';
import { View, ScrollView, Animated, Easing } from 'react-native';
import { Note } from '../../components';
import styles from './styles';

import * as actions from '../../redux/layout/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class NoteList extends Component {

    timerId = 0;

    constructor(props) {
        super(props);
        this.props.setIsExpanded(true);

        this.state = {
            notes: [
                {
                    nota: "Eu sou linda",
                },
                {
                    nota: "Paloma é feia",
                },
                {
                    nota: "O sol não brilha",
                },
                {
                    nota: "O verde é da cor azul",
                },
                {
                    nota: "Free Fire é melhor que Fortnite, podi",
                },
                {
                    nota: "Um..... To com Fome",
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

    componentDidMount = () => {

   

    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <ScrollView
                    onScrollBeginDrag={() => { this.onStartScroll() }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.noteContainer}>

                    <View style={styles.topContainer}></View>

                    {this.state.notes.map((value, key) => {
                        return (
                            <Note key={key} id={key}>
                                {value.nota}
                            </Note>
                        )
                    })}

                    <View style={styles.bottomContainer}></View>

                </ScrollView>
            </View>
        )
    }

    onStartScroll = () => {
        if (this.props.isExpanded === true) {
            this.props.setIsExpanded(false);
        }

        clearTimeout(this.timerId);

        let id = setTimeout(() => {
            this.props.setIsExpanded(true);
        }, 2500);

        this.timerId = id;
    }

    getAnimStyle = () => {

    }
}

const mapStateToProps = (state) => ({
    isExpanded: state.layout.isExpanded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);