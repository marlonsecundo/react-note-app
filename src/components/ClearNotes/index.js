import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as notesActions from '../../redux/notes/actions';


export class ClearNotes extends Component {


  constructor(props) {
    super(props);
  }


  componentDidMount = () => {
    let today = new Date(Date.now()).getDate();

    if (today !== this.props.lastDay) {
      this.props.clearNotes();
      this.props.addLastDay(today);
    }
  }

  render() {
    return (
      <View style={styles.rootContainer} >
        <View style={styles.container}>
          <Text style={styles.text}>As notas serão excluídas em 5h</Text>
        </View>
      </View>
    )
  }


}

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
  lastDay: state.notes.lastDay,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(notesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClearNotes);