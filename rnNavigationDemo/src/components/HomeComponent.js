import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class HomeComponent extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (<View><Text>Welcome Home! Mr. {user.firstName}</Text></View>);
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};  
export default connect(mapStateToProps)(HomeComponent);