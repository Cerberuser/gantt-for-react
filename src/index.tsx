import GanttJS, { IOptions, ITask } from 'frappe-gantt';
import * as React from 'react';
import { bind, clear } from 'size-sensor';

export interface IProps extends Partial<IOptions> {
    tasks: ITask[];
}

export default class ReactGantt extends React.Component<IProps> {
    private ganttRef = React.createRef<SVGSVGElement>();
    private ganttInst: GanttJS | null = null;

    componentDidMount() {
        this.renderFrappeGanttDOM();
    }

    // redraw the gantt when update. now change the viewMode
    componentDidUpdate(prevProps: IProps) {
        if (this.ganttInst) {
            this.ganttInst.refresh(this.props.tasks);
            if (this.props.view_mode && this.props.view_mode !== prevProps.view_mode) {
                this.ganttInst.change_view_mode(this.props.view_mode);
            }
        } else if (this.ganttRef.current) {
            this.renderFrappeGanttDOM();
        }
    }

    componentWillUnmount() {
        if (this.ganttRef.current) {
            clear(this.ganttRef.current as Element as HTMLElement); // hack to get around not-so-correct types
        }
    }

    render() {
        return (
            <svg ref={this.ganttRef}/>
        );
    }

    /**
     * render the gantt chart
     * @returns {GanttJS}
     */
    private renderFrappeGanttDOM() {
        // init the Gantt
        // if exist, return
        if (this.ganttInst) {
            return this.ganttInst;
        }

        const {tasks, ...innerProps} = this.props;

        // when resize
        bind(this.ganttRef.current as Element as HTMLElement, // hack to get around not-so-correct types
            () => {
                if (this.ganttInst) {
                    this.ganttInst.refresh(this.props.tasks);
                }
            });

        // new instance
        this.ganttInst = new GanttJS(this.ganttRef.current!, tasks, innerProps);
        return this.ganttInst;
    }
}
