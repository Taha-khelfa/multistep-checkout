"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            count: 0,
            name: "",
            email: "",
            password: "",
            street1: "",
            street2: "",
            state: "",
            zip: "",
            phone: "",
            cardNumber: "",
            expiration: "",
            zipCode: ""

        };
        return _this;
    }

    _createClass(App, [{
        key: "next",
        value: function next() {

            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count + 1);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.count === 0) {
                return React.createElement(CreateAcc, { next: this.next.bind(this) });
            } else if (this.state.count === 1) {
                return React.createElement(Shipping, { next: this.next.bind(this) });
            } else if (this.state.count === 2) {
                return React.createElement(Payment, { next: this.next.bind(this) });
            }
        }
    }]);

    return App;
}(React.Component);

var CreateAcc = function (_React$Component2) {
    _inherits(CreateAcc, _React$Component2);

    function CreateAcc() {
        _classCallCheck(this, CreateAcc);

        return _possibleConstructorReturn(this, (CreateAcc.__proto__ || Object.getPrototypeOf(CreateAcc)).apply(this, arguments));
    }

    _createClass(CreateAcc, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "", method: "Post", name: "" },
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "b",
                            null,
                            "Name"
                        )
                    ),
                    React.createElement("input", { type: "text", placeholder: "Enter Email" }),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "b",
                            null,
                            "Email"
                        )
                    ),
                    React.createElement("input", { type: "email", placeholder: "Enter Password" }),
                    React.createElement(
                        "label",
                        null,
                        React.createElement(
                            "b",
                            null,
                            " Password"
                        )
                    ),
                    React.createElement("input", { type: "password", placeholder: "Password" }),
                    React.createElement(
                        "label",
                        null,
                        React.createElement("input", { type: "checkbox" })
                    ),
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.props.next },
                        "Next"
                    )
                )
            );
        }
    }]);

    return CreateAcc;
}(React.Component);

var Shipping = function (_React$Component3) {
    _inherits(Shipping, _React$Component3);

    function Shipping() {
        _classCallCheck(this, Shipping);

        return _possibleConstructorReturn(this, (Shipping.__proto__ || Object.getPrototypeOf(Shipping)).apply(this, arguments));
    }

    _createClass(Shipping, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "", method: "POST" },
                    React.createElement("input", { type: "text", id: "street1" }),
                    React.createElement("input", { type: "text", id: "street2" }),
                    React.createElement("input", { type: "text", id: "state" }),
                    React.createElement("input", { type: "text", id: "zip" }),
                    React.createElement("input", { type: "phone", id: "phone" }),
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.props.next },
                        "Next"
                    )
                )
            );
        }
    }]);

    return Shipping;
}(React.Component);

var Payment = function (_React$Component4) {
    _inherits(Payment, _React$Component4);

    function Payment() {
        _classCallCheck(this, Payment);

        return _possibleConstructorReturn(this, (Payment.__proto__ || Object.getPrototypeOf(Payment)).apply(this, arguments));
    }

    _createClass(Payment, [{
        key: "render",
        value: function render() {
            React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "", method: "POST" },
                    React.createElement("input", { type: "text", id: "cardNumber" }),
                    React.createElement("input", { type: "date", id: "expiration " }),
                    React.createElement("input", { type: "text", id: "zipCode" }),
                    React.createElement(
                        "button",
                        { id: "F2" },
                        " Next"
                    ),
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.props.next },
                        "Next"
                    )
                )
            );
        }
    }]);

    return Payment;
}(React.Component);

var Confirmation = function (_React$Component5) {
    _inherits(Confirmation, _React$Component5);

    function Confirmation() {
        _classCallCheck(this, Confirmation);

        return _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).apply(this, arguments));
    }

    _createClass(Confirmation, [{
        key: "render",
        value: function render() {
            React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { type: "button", onClick: this.props.next },
                    "Next"
                )
            );
        }
    }]);

    return Confirmation;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjb3VudCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RyZWV0MSIsInN0cmVldDIiLCJ6aXAiLCJwaG9uZSIsImNhcmROdW1iZXIiLCJleHBpcmF0aW9uIiwiemlwQ29kZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDcmVhdGVBY2MiLCJTaGlwcGluZyIsIlBheW1lbnQiLCJDb25maXJtYXRpb24iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0MsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4R0FDUkEsS0FEUTs7QUFFZCxjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQVEsQ0FEQztBQUVUQyxrQkFBTyxFQUZFO0FBR1RDLG1CQUFRLEVBSEM7QUFJVEMsc0JBQVcsRUFKRjtBQUtUQyxxQkFBUyxFQUxBO0FBTVRDLHFCQUFVLEVBTkQ7QUFPVE4sbUJBQVEsRUFQQztBQVFUTyxpQkFBTSxFQVJHO0FBU1RDLG1CQUFRLEVBVEM7QUFVVEMsd0JBQWEsRUFWSjtBQVdUQyx3QkFBYSxFQVhKO0FBWVRDLHFCQUFVOztBQVpELFNBQWI7QUFGYztBQWtCakI7Ozs7K0JBQ007O0FBRUgsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDWCxPQUFNLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFrQixDQUF6QixFQUFkO0FBQ0FZLG9CQUFRQyxHQUFSLENBQVksS0FBS2QsS0FBTCxDQUFXQyxLQUFYLEdBQWtCLENBQTlCO0FBRUg7OztpQ0FDTztBQUNKLGdCQUFHLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFtQixDQUF0QixFQUF3QjtBQUNwQix1QkFBTyxvQkFBQyxTQUFELElBQVcsTUFBTSxLQUFL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Z0IsSUFBNUM7QUFBQTtBQUFBO0FBREQ7QUFHSDs7OztFQUxzQkUsTUFBTUMsUzs7QUFVbENLLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICBjb3VudCA6IDAsXHJcbiAgICAgICAgICAgICAgIG5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICBlbWFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgICAgc3RyZWV0MTogXCJcIixcclxuICAgICAgICAgICAgICAgc3RyZWV0MiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgIHN0YXRlIDogXCJcIixcclxuICAgICAgICAgICAgICAgemlwIDogXCJcIixcclxuICAgICAgICAgICAgICAgcGhvbmUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICBjYXJkTnVtYmVyIDogXCJcIixcclxuICAgICAgICAgICAgICAgZXhwaXJhdGlvbiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgIHppcENvZGUgOiBcIlwiXHJcblxyXG5cclxuICAgICAgICAgICB9O1xyXG4gICAgICAgfVxyXG4gICAgICAgbmV4dCgpIHtcclxuXHJcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6dGhpcy5zdGF0ZS5jb3VudCArMX0pXHJcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudCArMSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnQ9PT0wKXtcclxuICAgICAgICAgICAgICAgcmV0dXJuIDxDcmVhdGVBY2MgbmV4dD17dGhpcy5uZXh0LmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmNvdW50PT09MSl7XHJcbiAgICAgICAgICAgICAgIHJldHVybiA8U2hpcHBpbmcgbmV4dD17dGhpcy5uZXh0LmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmNvdW50PT09Mil7XHJcbiAgICAgICAgICAgICAgIHJldHVybiA8UGF5bWVudCBuZXh0PXt0aGlzLm5leHQuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuICAgY2xhc3MgQ3JlYXRlQWNjIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiUG9zdFwiIG5hbWU9XCJcIiA+XHJcbiAgICAgICAgICAgIDxsYWJlbCA+PGI+TmFtZTwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxhYmVsID48Yj5FbWFpbDwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCIgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGFiZWwgPjxiPiBQYXNzd29yZDwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9IHt0aGlzLnByb3BzLm5leHR9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgIGNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJzdHJlZXQxXCIvPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJzdHJlZXQyXCIvPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJzdGF0ZVwiLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJ6aXBcIi8+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInBob25lXCIgaWQ9XCJwaG9uZVwiLz5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9IHt0aGlzLnByb3BzLm5leHR9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApXHJcbiAgICAgfVxyXG4gfVxyXG5cclxuIGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJjYXJkTnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwiZGF0ZVwiIGlkPVwiZXhwaXJhdGlvbiBcIi8+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJ6aXBDb2RlXCIvPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIkYyXCI+IE5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uZXh0fT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICB9XHJcbiB9XHJcbiBjbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrID0ge3RoaXMucHJvcHMubmV4dH0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICB9XHJcbiB9XHJcblxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwJykpOyJdfQ==