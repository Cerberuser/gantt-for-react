# gantt-for-react

> [Frappe Gantt](https://github.com/frappe/gantt) component for React wrapper.

[![npm](https://img.shields.io/npm/v/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)
[![npm](https://img.shields.io/npm/dt/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)
[![npm](https://img.shields.io/npm/l/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)


# 1. Install

```sh
npm install --save gantt-for-react
```


# 2. Usage

```jsx
import React from 'react';
import ReactGantt from 'gantt-for-react';

<ReactGantt
  tasks={this.getTasks()}
  viewMode={this.state.viewMode}
  onClick={this._func}
  onDateChange={this._func}
  onProgressChange={this._func}
  onViewChange={this._func}
  customPopupHtml={this._html_func}
/>
```

# 3. LICENSE

MIT @[hustcc](https://github.com/hustcc)
