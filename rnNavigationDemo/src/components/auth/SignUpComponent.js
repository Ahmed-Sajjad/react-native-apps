import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class SignUpComponent extends Component {
    static navigationOptions = { title: 'Create Account' };
    state = { name: '', email: '', passwors: '' };

    constructor(props) {
        super(props);
    }

    onNameChange(name) {
        this.setState({ name });
    }

    onEmailChange(email) {
        this.setState({ email });
    }

    onPasswordChange(password) {
        this.setState({ password });
    }

    onSubmit() {
        alert('You have successfully registered!');
        this.setState({ name: '', email: '', password: ''});
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="John Doe"
                        value={this.state.name}
                        onChangeText={this.onNameChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="email"
                        placeholder="abc@mail.com"
                        value={this.state.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="password"
                        placeholder="Password1"
                        value={this.state.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onSubmit.bind(this)} >Sign Up</Button>
                </CardSection>
            </Card>
        );
    }

};
export default SignUpComponent;