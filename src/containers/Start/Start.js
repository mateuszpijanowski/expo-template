import React, {Component} from 'react';
import {Text} from 'react-native';
import Spinner from '../../components/Spinner/Spinner';
import Template from "../Template/Template";

import {connect} from 'react-redux';
import * as actions from "../../store/actions";

class Start extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.props.onInitSettings(() => {
            this.setState({loading: true});
        });
    }

    render() {
        const {loading} = this.state;

        return (
            <>
                {loading ?
                    <Spinner size={64} /> :
                    <Template>
                        <Text>Expo template</Text>
                    </Template>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.settings.lang
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitSettings: (settings) => dispatch(actions.initSettings(settings))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);