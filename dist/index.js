var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import GanttJS from 'frappe-gantt';
import * as React from 'react';
import { bind, clear } from 'size-sensor';
export var noop = function () {
};
var ReactGantt = /** @class */ (function (_super) {
    __extends(ReactGantt, _super);
    function ReactGantt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ganttRef = null;
        _this.ganttInst = null;
        return _this;
    }
    ReactGantt.prototype.componentDidMount = function () {
        this.renderFrappeGanttDOM();
    };
    // redraw the gantt when update. now change the viewMode
    ReactGantt.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.ganttInst) {
            this.ganttInst.refresh(this.props.tasks);
            if (this.props.viewMode !== prevProps.viewMode) {
                this.ganttInst.change_view_mode(this.props.viewMode);
            }
        }
    };
    ReactGantt.prototype.componentWillUnmount = function () {
        clear(this.ganttRef); // hack to get around not-so-correct types
    };
    /**
     * render the gantt chart
     * @returns {GanttJS}
     */
    ReactGantt.prototype.renderFrappeGanttDOM = function () {
        var _this = this;
        // init the Gantt
        // if exist, return
        if (this.ganttInst) {
            return this.ganttInst;
        }
        var _a = this.props, onClick = _a.onClick, onDateChange = _a.onDateChange, onProgressChange = _a.onProgressChange, onViewChange = _a.onViewChange, customPopupHtml = _a.customPopupHtml, tasks = _a.tasks, viewMode = _a.viewMode;
        // when resize
        bind(this.ganttRef, // hack to get around not-so-correct types
        function () {
            if (_this.ganttInst) {
                _this.ganttInst.refresh(_this.props.tasks);
            }
        });
        // new instance
        this.ganttInst = new GanttJS(this.ganttRef, tasks, {
        // on_click: onClick || noop,
        // on_date_change: onDateChange || noop,
        // on_progress_change: onProgressChange || noop,
        // on_view_change: onViewChange || noop,
        // custom_popup_html: customPopupHtml || null,
        });
        // change view mode
        this.ganttInst.change_view_mode(viewMode);
        return this.ganttInst;
    };
    ReactGantt.prototype.render = function () {
        var _this = this;
        return (React.createElement("svg", { ref: function (node) { _this.ganttRef = node; } }));
    };
    return ReactGantt;
}(React.Component));
export default ReactGantt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHO0FBQ3BCLENBQUMsQ0FBQztBQUVGO0lBQXdDLDhCQUF5QjtJQUFqRTtRQUFBLHFFQXFFQztRQXBFRyxjQUFRLEdBQXNCLElBQUksQ0FBQztRQUNuQyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUFtRXJDLENBQUM7SUFqRUcsc0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCx1Q0FBa0IsR0FBbEIsVUFBbUIsU0FBYyxFQUFFLFNBQWM7UUFDN0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEQ7U0FDSjtJQUNMLENBQUM7SUFFRCx5Q0FBb0IsR0FBcEI7UUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQWtDLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztJQUM5RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQW9CLEdBQXBCO1FBQUEsaUJBb0NDO1FBbkNHLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6QjtRQUVLLElBQUEsZUFRUSxFQVBWLG9CQUFPLEVBQ1AsOEJBQVksRUFDWixzQ0FBZ0IsRUFDaEIsOEJBQVksRUFDWixvQ0FBZSxFQUNmLGdCQUFLLEVBQ0wsc0JBQ1UsQ0FBQztRQUVmLGNBQWM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQWtDLEVBQUUsMENBQTBDO1FBQ3BGO1lBQ0ksSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUyxFQUFFLEtBQUssRUFBRTtRQUNoRCw2QkFBNkI7UUFDN0Isd0NBQXdDO1FBQ3hDLGdEQUFnRDtRQUNoRCx3Q0FBd0M7UUFDeEMsOENBQThDO1NBQ2pELENBQUMsQ0FBQztRQUNILG1CQUFtQjtRQUNuQixJQUFJLENBQUMsU0FBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsT0FBTyxDQUNILDZCQUFLLEdBQUcsRUFBRSxVQUFDLElBQUksSUFBTSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNsRCxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXJFRCxDQUF3QyxLQUFLLENBQUMsU0FBUyxHQXFFdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FudHRKUyBmcm9tICdmcmFwcGUtZ2FudHQnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmQsIGNsZWFyIH0gZnJvbSAnc2l6ZS1zZW5zb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7LyoqL1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHYW50dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgZ2FudHRSZWY6IFNWR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIGdhbnR0SW5zdDogR2FudHRKUyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyRnJhcHBlR2FudHRET00oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWRyYXcgdGhlIGdhbnR0IHdoZW4gdXBkYXRlLiBub3cgY2hhbmdlIHRoZSB2aWV3TW9kZVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogYW55LCBwcmV2U3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5yZWZyZXNoKHRoaXMucHJvcHMudGFza3MpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aWV3TW9kZSAhPT0gcHJldlByb3BzLnZpZXdNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5jaGFuZ2Vfdmlld19tb2RlKHRoaXMucHJvcHMudmlld01vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFyKHRoaXMuZ2FudHRSZWYgYXMgRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7IC8vIGhhY2sgdG8gZ2V0IGFyb3VuZCBub3Qtc28tY29ycmVjdCB0eXBlc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIHRoZSBnYW50dCBjaGFydFxyXG4gICAgICogQHJldHVybnMge0dhbnR0SlN9XHJcbiAgICAgKi9cclxuICAgIHJlbmRlckZyYXBwZUdhbnR0RE9NKCkge1xyXG4gICAgICAgIC8vIGluaXQgdGhlIEdhbnR0XHJcbiAgICAgICAgLy8gaWYgZXhpc3QsIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYW50dEluc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2ssXHJcbiAgICAgICAgICAgIG9uRGF0ZUNoYW5nZSxcclxuICAgICAgICAgICAgb25Qcm9ncmVzc0NoYW5nZSxcclxuICAgICAgICAgICAgb25WaWV3Q2hhbmdlLFxyXG4gICAgICAgICAgICBjdXN0b21Qb3B1cEh0bWwsXHJcbiAgICAgICAgICAgIHRhc2tzLFxyXG4gICAgICAgICAgICB2aWV3TW9kZSxcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy8gd2hlbiByZXNpemVcclxuICAgICAgICBiaW5kKHRoaXMuZ2FudHRSZWYgYXMgRWxlbWVudCBhcyBIVE1MRWxlbWVudCwgLy8gaGFjayB0byBnZXQgYXJvdW5kIG5vdC1zby1jb3JyZWN0IHR5cGVzXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FudHRJbnN0LnJlZnJlc2godGhpcy5wcm9wcy50YXNrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBuZXcgaW5zdGFuY2VcclxuICAgICAgICB0aGlzLmdhbnR0SW5zdCA9IG5ldyBHYW50dEpTKHRoaXMuZ2FudHRSZWYhLCB0YXNrcywge1xyXG4gICAgICAgICAgICAvLyBvbl9jbGljazogb25DbGljayB8fCBub29wLFxyXG4gICAgICAgICAgICAvLyBvbl9kYXRlX2NoYW5nZTogb25EYXRlQ2hhbmdlIHx8IG5vb3AsXHJcbiAgICAgICAgICAgIC8vIG9uX3Byb2dyZXNzX2NoYW5nZTogb25Qcm9ncmVzc0NoYW5nZSB8fCBub29wLFxyXG4gICAgICAgICAgICAvLyBvbl92aWV3X2NoYW5nZTogb25WaWV3Q2hhbmdlIHx8IG5vb3AsXHJcbiAgICAgICAgICAgIC8vIGN1c3RvbV9wb3B1cF9odG1sOiBjdXN0b21Qb3B1cEh0bWwgfHwgbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjaGFuZ2UgdmlldyBtb2RlXHJcbiAgICAgICAgdGhpcy5nYW50dEluc3QhLmNoYW5nZV92aWV3X21vZGUodmlld01vZGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHN2ZyByZWY9eyhub2RlKSA9PiB7dGhpcy5nYW50dFJlZiA9IG5vZGU7IH19Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==