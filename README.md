# gantt-for-react

> [Frappe Gantt](https://github.com/frappe/gantt) component for React wrapper.

[![npm](https://img.shields.io/npm/v/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)
[![npm](https://img.shields.io/npm/dt/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)
[![npm](https://img.shields.io/npm/l/gantt-for-react-typescript.svg)](https://www.npmjs.com/package/gantt-for-react-typescript)


# 1. Install

```sh
npm install --save gantt-for-react-typescript
```


# 2. Usage

```jsx
import * as React from 'react';
import ReactGantt from 'gantt-for-react-typescript';

<ReactGantt
  tasks={this.getTasks()}
  view_mode={this.state.viewMode}
  on_click={this._func}
  on_date_change={this._func}
  on_progress_change={this._func}
  on_view_change={this._func}
  custom_popup_html={this._html_func}
/>
```

# 3. LICENSE

MIT
