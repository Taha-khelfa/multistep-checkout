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
        key: "previous",
        value: function previous() {
            this.setState({ count: this.state.count - 1 });
        }
    }, {
        key: "render",
        value: function render() {
            return this.state.count === 0 ? React.createElement(CreateAcc, { next: this.next.bind(this) }) : this.state.count === 1 ? React.createElement(Shipping, { next: this.next.bind(this), previous: this.previous.bind(this) }) : this.state.count === 2 ? React.createElement(Payment, { next: this.next.bind(this), previous: this.previous.bind(this) }) : React.createElement(Confirmation, { previous: this.previous.bind(this) });
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
                    ),
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.props.previous },
                        "Previous"
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
            return React.createElement(
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
                        { type: "button", onClick: this.props.next },
                        "Next"
                    ),
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.props.previous },
                        "Previous"
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
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { type: "button", onClick: this.props.previous },
                    "previous"
                ),
                React.createElement(
                    "button",
                    { type: "button" },
                    "confirm"
                )
            );
        }
    }]);

    return Confirmation;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjb3VudCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RyZWV0MSIsInN0cmVldDIiLCJ6aXAiLCJwaG9uZSIsImNhcmROdW1iZXIiLCJleHBpcmF0aW9uIiwiemlwQ29kZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJiaW5kIiwicHJldmlvdXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNyZWF0ZUFjYyIsIlNoaXBwaW5nIiwiUGF5bWVudCIsIkNvbmZpcm1hdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDhHQUNSQSxLQURROztBQUVkLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBUSxDQURDO0FBRVRDLGtCQUFPLEVBRkU7QUFHVEMsbUJBQVEsRUFIQztBQUlUQyxzQkFBVyxFQUpGO0FBS1RDLHFCQUFTLEVBTEE7QUFNVEMscUJBQVUsRUFORDtBQU9UTixtQkFBUSxFQVBDO0FBUVRPLGlCQUFNLEVBUkc7QUFTVEMsbUJBQVEsRUFUQztBQVVUQyx3QkFBYSxFQVZKO0FBV1RDLHdCQUFhLEVBWEo7QUFZVEMscUJBQVU7O0FBWkQsU0FBYjtBQUZjO0FBa0JqQjs7OzsrQkFDTTs7QUFFSCxpQkFBS0MsUUFBTCxDQUFjLEVBQUNYLE9BQU0sS0FBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLENBQTFCLEVBQWQ7QUFDQVksb0JBQVFDLEdBQVIsQ0FBWSxLQUFLZCxLQUFMLENBQVdDLEtBQVgsR0FBa0IsQ0FBOUI7QUFFSDs7O21DQUNVO0FBQ1AsaUJBQUtXLFFBQUwsQ0FBYyxFQUFDWCxPQUFNLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUExQixFQUFkO0FBQ0g7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LE1BQWIsRUFBb0IsSUFBRyxTQUF2QixHQUhBO0FBS0E7QUFBQTtBQUFBLDBCQUFRLE1BQUssUUFBYixFQUFzQixTQUFXLEtBQUt2QixLQUFMLENBQVdnQixJQUE1QztBQUFBO0FBQUEscUJBTEE7QUFNQTtBQUFBO0FBQUEsMEJBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVcsS0FBS2hCLEtBQUwsQ0FBV2tCLFFBQTVDO0FBQUE7QUFBQTtBQU5BO0FBREEsYUFEQTtBQWFIOzs7O0VBZmlCQyxNQUFNQyxTOztJQWlCdEJJLFk7Ozs7Ozs7Ozs7O2lDQUNNO0FBQ0osbUJBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixTQUFXLEtBQUt4QixLQUFMLENBQVdrQixRQUE1QztBQUFBO0FBQUEsaUJBREE7QUFFQTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUZBLGFBREE7QUFNSDs7OztFQVJzQkMsTUFBTUMsUzs7QUFhakNLLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb3VudCA6IDAsXHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgICAgICAgc3RyZWV0MTogXCJcIixcclxuICAgICAgICAgICAgc3RyZWV0MiA6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXRlIDogXCJcIixcclxuICAgICAgICAgICAgemlwIDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmUgOiBcIlwiLFxyXG4gICAgICAgICAgICBjYXJkTnVtYmVyIDogXCJcIixcclxuICAgICAgICAgICAgZXhwaXJhdGlvbiA6IFwiXCIsXHJcbiAgICAgICAgICAgIHppcENvZGUgOiBcIlwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDp0aGlzLnN0YXRlLmNvdW50ICsgMX0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudCArMSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OnRoaXMuc3RhdGUuY291bnQgLSAxfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnQ9PT0wID9cclxuICAgICAgICAgICAgPENyZWF0ZUFjYyBuZXh0PXt0aGlzLm5leHQuYmluZCh0aGlzKX0vPiA6XHJcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLmNvdW50PT09MSA/XHJcbiAgICAgICAgICAgICA8U2hpcHBpbmcgbmV4dD17dGhpcy5uZXh0LmJpbmQodGhpcyl9IHByZXZpb3VzPXt0aGlzLnByZXZpb3VzLmJpbmQodGhpcyl9Lz4gIDpcclxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuY291bnQ9PT0yID9cclxuICAgICAgICAgICA8UGF5bWVudCBuZXh0PXt0aGlzLm5leHQuYmluZCh0aGlzKX0gcHJldmlvdXM9e3RoaXMucHJldmlvdXMuYmluZCh0aGlzKX0vPiA6XHJcbiAgICAgICAgICAgPENvbmZpcm1hdGlvbiAgcHJldmlvdXM9e3RoaXMucHJldmlvdXMuYmluZCh0aGlzKX0vPiApIClcclxuICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmNsYXNzIENyZWF0ZUFjYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlBvc3RcIiBuYW1lPVwiXCIgPlxyXG4gICAgICAgICAgICA8bGFiZWwgPjxiPk5hbWU8L2I+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGFiZWwgPjxiPkVtYWlsPC9iPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCIgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGFiZWwgPjxiPiBQYXNzd29yZDwvYj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4gXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uZXh0fT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGFzcyBTaGlwcGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgaWQ9XCJzdHJlZXQxXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIGlkPVwic3RyZWV0MlwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiBpZD1cInN0YXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIGlkPVwiemlwXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwicGhvbmVcIiBpZD1cInBob25lXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9IHt0aGlzLnByb3BzLm5leHR9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5wcmV2aW91c30+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xhc3MgUGF5bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgICAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIGlkPVwiY2FyZE51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID1cImRhdGVcIiBpZD1cImV4cGlyYXRpb24gXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPVwidGV4dFwiIGlkPVwiemlwQ29kZVwiLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrID0ge3RoaXMucHJvcHMubmV4dH0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljayA9IHt0aGlzLnByb3BzLnByZXZpb3VzfT5QcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5wcmV2aW91c30+cHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiID5jb25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoPEFwcC8+ICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcCcpKTsiXX0=