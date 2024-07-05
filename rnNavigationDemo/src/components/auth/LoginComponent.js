import { emailChanged, passwordChanged, loginUser } from '../../actions';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginComponent extends Component {
    static navigationOptions = { title: 'Sign in' };
    signInButton = <Button onPress={this.onSubmit.bind(this)}>{'Sign In'}</Button>;

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const { navigation, user } = this.props;
        if(user) {
            navigation.navigate("DrawerStack");
        }
    }

    onEmailUpdate(email) {
        this.props.emailChanged(email);
    }

    onPasswordUpdate(password) {
        this.props.passwordChanged(password);
    }

    onSubmit() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner />
        }
        return this.signInButton;
    }

    renderError() {
        if(this.props.error) {
            return <Text style={{ alignSelf: 'center', color: '#FF0000' }}>{ this.props.error }</Text>;
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="abc@mail.com"
                    value={this.props.email}
                    onChangeText={this.onEmailUpdate.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                      secureTextEntry
                      label="Password"
                      placeholder="password"
                      value={this.props.password}
                      onChangeText={this.onPasswordUpdate.bind(this)}
                    />
                </CardSection>
                
                { this.renderError() }
                
                <CardSection>
                    { this.renderButton() }
                </CardSection>

                <CardSection>
                    <Text>{'New here? Then '}</Text>
                    <Text
                        style={{ color: 'blue' }}
                        onPress={() => this.props.navigation.navigate("signUpScreen")}
                    >{'Create an Account now!'}</Text>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginComponent);