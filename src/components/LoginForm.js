import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common'

class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(() => this.onLoginFail.bind(this));
            });
    };

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '' //not needed
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) return <Spinner/>;
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={email => this.setState({email})}
                        placeholder="user@gmail.com"
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        onChangeText={password => this.setState({password})}
                        placeholder="password"
                        value={this.state.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection style={styles.buttonContainerStyle}>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center'
    }
};

export default LoginForm;