declare module 'frappe-gantt' {
    export interface ITask {
        id: string;
        name: string;
        start: Date | string;
        end: Date | string;
        progress?: number;
        dependencies?: string;
        custom_class?: string;
    }

    export interface ITaskInternal extends ITask {
        _start: Date;
        _end: Date;
    }

    export const enum ViewMode {
        QuarterDay = 'Quarter Day',
        HalfDay = 'Half Day',
        Day = 'Day',
        Week = 'Week',
        Month = 'Month',
        Year = 'Year',
    }

    export interface IOptions {
        header_height: number;
        column_width: number;
        step: number;
        view_modes: ViewMode[];
        bar_height: number;
        bar_corner_radius: number;
        arrow_curve: number;
        padding: number;
        view_mode: ViewMode;
        date_format: string;
        popup_trigger: keyof HTMLElementEventMap;
        custom_popup_html: (task: ITaskInternal) => string;
        language: 'en' | 'ru' | 'ptBr';
    }

    export default class Gantt {
        constructor(wrapper: Element, tasks: ITask[], options?: Partial<IOptions>);
        refresh(tasks: ITask[]): void;
        change_view_mode(mode: ViewMode): void;
    }
}
