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
    ReactGantt.prototype.render = function () {
        return (React.createElement("svg", { ref: this.ganttRef }));
    };
    return ReactGantt;
}(React.Component));
export default ReactGantt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLE9BQTRCLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTTFDO0lBQXdDLDhCQUF1QjtJQUEvRDtRQUFBLHFFQXlEQztRQXhERyxjQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBaUIsQ0FBQztRQUM1QyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUF1RHJDLENBQUM7SUFyREcsc0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCx1Q0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQseUNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFpQyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7U0FDckc7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQW9CLEdBQXBCO1FBQUEsaUJBb0JDO1FBbkJHLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6QjtRQUVELElBQU0sZUFBbUMsRUFBbEMsZ0JBQUssRUFBRSxrQ0FBMkIsQ0FBQztRQUUxQyxjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBaUMsRUFBRSwwQ0FBMEM7UUFDNUY7WUFDSSxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLGVBQWU7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBUSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FDN0IsQ0FBQztJQUNOLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF6REQsQ0FBd0MsS0FBSyxDQUFDLFNBQVMsR0F5RHREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbnR0SlMsIHsgSU9wdGlvbnMsIElUYXNrIH0gZnJvbSAnZnJhcHBlLWdhbnR0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kLCBjbGVhciB9IGZyb20gJ3NpemUtc2Vuc29yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUGFydGlhbDxJT3B0aW9ucz4ge1xyXG4gICAgdGFza3M6IElUYXNrW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0R2FudHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XHJcbiAgICBnYW50dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxTVkdTVkdFbGVtZW50PigpO1xyXG4gICAgZ2FudHRJbnN0OiBHYW50dEpTIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGcmFwcGVHYW50dERPTSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZHJhdyB0aGUgZ2FudHQgd2hlbiB1cGRhdGUuIG5vdyBjaGFuZ2UgdGhlIHZpZXdNb2RlXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW50dEluc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW50dEluc3QucmVmcmVzaCh0aGlzLnByb3BzLnRhc2tzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlld19tb2RlICYmIHRoaXMucHJvcHMudmlld19tb2RlICE9PSBwcmV2UHJvcHMudmlld19tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5jaGFuZ2Vfdmlld19tb2RlKHRoaXMucHJvcHMudmlld19tb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW50dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRnJhcHBlR2FudHRET00oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FudHRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjbGVhcih0aGlzLmdhbnR0UmVmLmN1cnJlbnQgYXMgRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7IC8vIGhhY2sgdG8gZ2V0IGFyb3VuZCBub3Qtc28tY29ycmVjdCB0eXBlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbmRlciB0aGUgZ2FudHQgY2hhcnRcclxuICAgICAqIEByZXR1cm5zIHtHYW50dEpTfVxyXG4gICAgICovXHJcbiAgICByZW5kZXJGcmFwcGVHYW50dERPTSgpIHtcclxuICAgICAgICAvLyBpbml0IHRoZSBHYW50dFxyXG4gICAgICAgIC8vIGlmIGV4aXN0LCByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5nYW50dEluc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FudHRJbnN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge3Rhc2tzLCAuLi5pbm5lclByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vIHdoZW4gcmVzaXplXHJcbiAgICAgICAgYmluZCh0aGlzLmdhbnR0UmVmLmN1cnJlbnQgYXMgRWxlbWVudCBhcyBIVE1MRWxlbWVudCwgLy8gaGFjayB0byBnZXQgYXJvdW5kIG5vdC1zby1jb3JyZWN0IHR5cGVzXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FudHRJbnN0LnJlZnJlc2godGhpcy5wcm9wcy50YXNrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBuZXcgaW5zdGFuY2VcclxuICAgICAgICB0aGlzLmdhbnR0SW5zdCA9IG5ldyBHYW50dEpTKHRoaXMuZ2FudHRSZWYuY3VycmVudCEsIHRhc2tzLCBpbm5lclByb3BzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW50dEluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzdmcgcmVmPXt0aGlzLmdhbnR0UmVmfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=