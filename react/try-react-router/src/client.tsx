import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import history from './appHistory';
import AppRoute from './routes';
import { Provider } from 'react-redux';
import customCreateStore from './redux/create';

const store = customCreateStore();

// 组件
const component = (
    <Provider store={store} key="provider">
        <BrowserRouter>
            <div>
                <AppRoute/>
            </div>
        </BrowserRouter>
    </Provider>
);

const dest = document.getElementById('content'); // 获取根元素
ReactDOM.render(
    component,
    dest,
);
