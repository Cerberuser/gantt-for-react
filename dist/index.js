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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import GanttJS from 'frappe-gantt';
import * as React from 'react';
import { bind, clear } from 'size-sensor';
var ReactGantt = /** @class */ (function (_super) {
    __extends(ReactGantt, _super);
    function ReactGantt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ganttRef = React.createRef();
        _this.ganttInst = null;
        return _this;
    }
    ReactGantt.prototype.componentDidMount = function () {
        this.renderFrappeGanttDOM();
    };
    // redraw the gantt when update. now change the viewMode
    ReactGantt.prototype.componentDidUpdate = function (prevProps) {
        if (this.ganttInst) {
            this.ganttInst.refresh(this.props.tasks);
            if (this.props.view_mode && this.props.view_mode !== prevProps.view_mode) {
                this.ganttInst.change_view_mode(this.props.view_mode);
            }
        }
        else if (this.ganttRef.current) {
            this.renderFrappeGanttDOM();
        }
    };
    ReactGantt.prototype.componentWillUnmount = function () {
        if (this.ganttRef.current) {
            clear(this.ganttRef.current); // hack to get around not-so-correct types
        }
    };
    ReactGantt.prototype.render = function () {
        return (React.createElement("svg", { ref: this.ganttRef }));
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
        var _a = this.props, tasks = _a.tasks, innerProps = __rest(_a, ["tasks"]);
        // when resize
        bind(this.ganttRef.current, // hack to get around not-so-correct types
        function () {
            if (_this.ganttInst) {
                _this.ganttInst.refresh(_this.props.tasks);
            }
        });
        // new instance
        this.ganttInst = new GanttJS(this.ganttRef.current, tasks, innerProps);
        return this.ganttInst;
    };
    return ReactGantt;
}(React.Component));
export default ReactGantt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLE9BQTRCLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTTFDO0lBQXdDLDhCQUF1QjtJQUEvRDtRQUFBLHFFQXlEQztRQXhEVyxjQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBaUIsQ0FBQztRQUM1QyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUF1RDdDLENBQUM7SUFyREcsc0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCx1Q0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQseUNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFpQyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7U0FDckc7SUFDTCxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNLLHlDQUFvQixHQUE1QjtRQUFBLGlCQW9CQztRQW5CRyxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7UUFFRCxJQUFNLGVBQW1DLEVBQWxDLGdCQUFLLEVBQUUsa0NBQTJCLENBQUM7UUFFMUMsY0FBYztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQWlDLEVBQUUsMENBQTBDO1FBQzVGO1lBQ0ksSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF6REQsQ0FBd0MsS0FBSyxDQUFDLFNBQVMsR0F5RHREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbnR0SlMsIHsgSU9wdGlvbnMsIElUYXNrIH0gZnJvbSAnZnJhcHBlLWdhbnR0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kLCBjbGVhciB9IGZyb20gJ3NpemUtc2Vuc29yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUGFydGlhbDxJT3B0aW9ucz4ge1xyXG4gICAgdGFza3M6IElUYXNrW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0R2FudHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XHJcbiAgICBwcml2YXRlIGdhbnR0UmVmID0gUmVhY3QuY3JlYXRlUmVmPFNWR1NWR0VsZW1lbnQ+KCk7XHJcbiAgICBwcml2YXRlIGdhbnR0SW5zdDogR2FudHRKUyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyRnJhcHBlR2FudHRET00oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWRyYXcgdGhlIGdhbnR0IHdoZW4gdXBkYXRlLiBub3cgY2hhbmdlIHRoZSB2aWV3TW9kZVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSVByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FudHRJbnN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FudHRJbnN0LnJlZnJlc2godGhpcy5wcm9wcy50YXNrcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpZXdfbW9kZSAmJiB0aGlzLnByb3BzLnZpZXdfbW9kZSAhPT0gcHJldlByb3BzLnZpZXdfbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW50dEluc3QuY2hhbmdlX3ZpZXdfbW9kZSh0aGlzLnByb3BzLnZpZXdfbW9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FudHRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckZyYXBwZUdhbnR0RE9NKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY2xlYXIodGhpcy5nYW50dFJlZi5jdXJyZW50IGFzIEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpOyAvLyBoYWNrIHRvIGdldCBhcm91bmQgbm90LXNvLWNvcnJlY3QgdHlwZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzdmcgcmVmPXt0aGlzLmdhbnR0UmVmfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciB0aGUgZ2FudHQgY2hhcnRcclxuICAgICAqIEByZXR1cm5zIHtHYW50dEpTfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmRlckZyYXBwZUdhbnR0RE9NKCkge1xyXG4gICAgICAgIC8vIGluaXQgdGhlIEdhbnR0XHJcbiAgICAgICAgLy8gaWYgZXhpc3QsIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYW50dEluc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7dGFza3MsIC4uLmlubmVyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy8gd2hlbiByZXNpemVcclxuICAgICAgICBiaW5kKHRoaXMuZ2FudHRSZWYuY3VycmVudCBhcyBFbGVtZW50IGFzIEhUTUxFbGVtZW50LCAvLyBoYWNrIHRvIGdldCBhcm91bmQgbm90LXNvLWNvcnJlY3QgdHlwZXNcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FudHRJbnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW50dEluc3QucmVmcmVzaCh0aGlzLnByb3BzLnRhc2tzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG5ldyBpbnN0YW5jZVxyXG4gICAgICAgIHRoaXMuZ2FudHRJbnN0ID0gbmV3IEdhbnR0SlModGhpcy5nYW50dFJlZi5jdXJyZW50ISwgdGFza3MsIGlubmVyUHJvcHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdDtcclxuICAgIH1cclxufVxyXG4iXX0=