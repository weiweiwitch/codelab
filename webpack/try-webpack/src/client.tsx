import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// 组件
const component = (
    <BrowserRouter>
        <div>
            H5
        </div>
    </BrowserRouter>
);

const dest = document.getElementById('content'); // 获取根元素
ReactDOM.render(
    component,
    dest,
);
