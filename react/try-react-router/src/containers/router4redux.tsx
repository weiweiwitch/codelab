import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ICombineState } from '../redux/reducer';
import { fetchTestData } from '../redux/modules/router4redux';

interface IStateProps {
    testData: string;
}

interface IDispatchProps {
    fetchTestData(param: string): String;
}

type IAppProps = IStateProps & IDispatchProps;

function mapStateToProps(state: ICombineState) {
    return {
        testData: state.router4redux.testData,
    };
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return bindActionCreators({
        fetchTestData,
    }, dispatch);
};

interface IState {
    testDataInState: string;
}

class Router4Redux extends Component<IAppProps, IState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            testDataInState: '无意义',
        };
    }

    tryClick = () => {
        const now = new Date();
        this.props.fetchTestData('现在时间：' + now.toDateString());
    };

    render() {
        return (
            <div>
                <button onClick={this.tryClick}>Show</button>
                <hr/>
                <div>Redux中的数据: {this.props.testData} 组件的State中的数据：{this.state.testDataInState}</div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Router4Redux);