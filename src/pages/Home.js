import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import { endpoint } from '../services/consts';
import api from '../services/api';

import { list } from './data';

export default class Home extends React.Component {
    
    state = {
        chats: [],
    }

    async componentDidMount() {
        //this.registerToSocket();

        //const response = await api.get('posts');

        //this.setState({ chats: response.data });

        this.setState({ chats: list });        
    }
        
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.chats.map((item) => (                                      
                            <ListItem                                       
                                key={item._id}                                
                                leftAvatar={{ source: { uri: `${endpoint}/files/${item.image}` } }}                                
                                title={item.author}
                                subtitle={item.description.substring(0,50) + ' ...'}                                 
                                onPress={ () => this.props.navigation.navigate('ChatScreen',{ item }) }
                                //containerStyle={{ borderBottomWidth: 1 }}                         
                                >                                                           
                            </ListItem>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
    
    },

    chatItem: {

    },


});