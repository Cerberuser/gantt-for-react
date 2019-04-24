import { IOptions, ITask } from 'frappe-gantt';
import * as React from 'react';
export interface IProps extends Partial<IOptions> {
    tasks: ITask[];
}
export default class ReactGantt extends React.Component<IProps> {
    private ganttRef;
    private ganttInst;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * render the gantt chart
     * @returns {GanttJS}
     */
    private renderFrappeGanttDOM;
}
