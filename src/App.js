import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDRBC2hWZ2oqi0xoVYCzbjhyNaBDxQgmvU',
            authDomain: 'authentification-fb399.firebaseapp.com',
            databaseURL: 'https://authentification-fb399.firebaseio.com',
            projectId: 'authentification-fb399',
            storageBucket: 'authentification-fb399.appspot.com',
            messagingSenderId: '80874628380'
        });

        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <View style={styles.spinnerViewStyle}>
                        <Spinner size="large"/>
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={styles.parentViewStyle}>
                <Header headerText={'Authentication'}/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    parentViewStyle: {
        flex: 1
    }
};


export default App;