import React, { Component } from 'react';
import { View, ScrollView, Animated, Easing } from 'react-native';
import { Note } from '../../components';
import styles from './styles';

import * as layoutActions from '../../redux/layout/actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class NoteList extends Component {

    timerId = 0;

    constructor(props) {
        super(props);
        this.props.setIsExpanded(true);
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

                    {this.props.notes.map((value, key) => {
                        return (
                            <Note key={key} id={key}>
                                {value.text}
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
    notes: state.notes.notes,
});

const mapDispatchToProps = (dispatch) => bindActionCreators( layoutActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);