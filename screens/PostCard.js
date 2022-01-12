import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";


import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
        return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image source={storyCardImg} style={styles.storyImage} />
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitle}>{this.props.story.title}</Text>
              <Text style={styles.authorText}>{this.props.story.author}</Text>
              <Text style={styles.description}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.like}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'red'} />
                <Text style={styles.likeText}>19k</Text>
              </View>
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  storyImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  titleContainer: { paddingLeft: RFValue(20), justifyContent: 'center' },
  storyTitle: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
