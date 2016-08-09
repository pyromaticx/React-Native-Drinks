import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';
import ListRow from './listrow.js';
import getRec from './drinkrec.js';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


export default class Home extends Component {

  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    let arr = ['should','be', 'working'];
    this.state = {
      dataSource: ds.cloneWithRows(getRec())
    };
  }
  renderRow(rowData, sectionId, rowId) {
  
    if(rowId == getRec().length - 1) {
      return (
        <View>
          <ListRow rowData={rowData} rowId={rowId} lastOne={true} lastOne={true}/>
        </View>
      )
    }
    return(
      <View>
        <ListRow rowData={rowData} rowId={rowId} lastOne={false}/>
      </View>
    );

  }
  render() {
    return (
      <View>
        <View style={{height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#efefff'}}>
          <Image style={{resizeMode: 'contain', height: 100, width: 190}} source={require('./img/rr.png')}></Image>
          <Text style={{fontSize:24}}>Bar Recipe App</Text>
        </View>
        <ListView
          style={{height: ScreenHeight - 100}}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
        </ListView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: '#fff',
    fontSize: 30,
    width: ScreenWidth,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
