import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { HeaderBackButton } from 'react-navigation';

import { endpoint } from '../services/consts';

export default class Chat extends React.Component {

    static navigationOptions = ({ navigation }) => ({        

        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' },
        
        headerLeft: (        
            <View style={styles.container}>
                <HeaderBackButton style={{ headerTintColor: 'white', }} onPress={() => navigation.goBack(null)} />                         
                <TouchableOpacity onPress={() => alert('User Touched')}>
                    <Image
                        source={{ uri: `${navigation.state.params.item.image}` }}
                        style={{ width: 30, height: 30, borderRadius: 400 / 2 }}                        
                        />                                                        
                </TouchableOpacity>
                <Text style={{ color: 'white', marginLeft: 10, }}>{navigation.state.params.item.author}</Text>
            </View>
        ),
            
        headerRight: (
            <TouchableOpacity onPress={() => alert('Right Menu Touched')}>
              <Text
                style={{ color: 'white', }}>
                Right Menu
              </Text>
            </TouchableOpacity>
          ),         
        });

    state = {        
        chatInput: '',
    }

    handleSubmit = async () => {
        const data = new FormData();
            
        data.append('hashtags', this.state.chatInput);
    
        await api.post('posts', data);    
        
      }

    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.item.description}</Text>

                <form id="inputChatForm" onSubmit={this.handleSubmit} >                            

                    <input
                        type="text"
                        name="chat"                                                
                        value={this.state.inputChat}
                    />                
        
                    <button type="submit">Enviar</button>         
                </form>
            </View>
        )
    };
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',        
    },

    backButton: {        
        color: '#FFF',
    },
});