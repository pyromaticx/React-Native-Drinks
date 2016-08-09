import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TouchableHighlight,
  Animated
} from 'react-native';



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


export default class ListRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      height: new Animated.Value(60)
    };
  }

  itemClicked(event) {
    if(this.state.expanded) {
      this.setState({
        expanded: false,
      });
      Animated.spring(
        this.state.height, {
          toValue: 60,
          friction: 1
        }
      ).start()
    } else {
      this.setState({
        expanded: true
      });
      Animated.spring(
        this.state.height, {
          toValue: 300,
          friction: 1
        }
      ).start()
    }
  }
  renderIngs() {
    rendered = [];
    for(var ingName in this.props.rowData.ings) {
      rendered.push(
        <View key={this.props.rowData.title + ingName} style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', width: ScreenWidth}}>
          <Text style={{color: '#fff', flex: 1, textAlign: 'center'}}>{ingName}</Text>
          <Text style={{color: '#fff', flex: 1, textAlign: 'center'}}>{this.props.rowData.ings[ingName]}</Text>
        </View>
      )
    }
    rendered.push(
      <View key={this.props.rowData.title + "instruction"} style={{margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', width: ScreenWidth}}>
        <Text style={{color: '#fff', flex: 2, textAlign: 'center'}}>{"Instructions: " + this.props.rowData.instruction}</Text>
      </View>
    );
    rendered.push(
      <View key={this.props.rowData.title + "garnish"} style={{margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', width: ScreenWidth}}>
        <Text style={{color: '#fff', flex: 2, textAlign: 'center'}}>{"Garnish: " + this.props.rowData.garnish}</Text>
      </View>
    );
    return rendered
  }
  render() {
    console.log(this.state.expanded)
    return (
      <TouchableHighlight underlayColor='#789' onPress={(event) => {this.itemClicked(event)}}>
        <View style={[styles.rowStyle, {height: this.state.expanded ? 300: 60, marginBottom: this.props.lastOne ? 50: 0}]}>
          <Text style={[styles.rowText, {marginBottom: this.state.expanded ? 20 : 0}]}>{this.props.rowData.title}</Text>
          {this.state.expanded ? this.renderIngs() : <View />}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    rowStyle: {
      width: ScreenWidth,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
      borderBottomColor: '#cbc',
      borderBottomWidth: 1,
    },
    rowText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
    }
});
