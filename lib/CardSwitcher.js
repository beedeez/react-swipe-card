'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleCard = require('./SimpleCard');

var _SimpleCard2 = _interopRequireDefault(_SimpleCard);

var _DraggableCard = require('./DraggableCard');

var _DraggableCard2 = _interopRequireDefault(_DraggableCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
	_inherits(Card, _Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'forceUp',
		value: function forceUp() {
			this.refs.card.forceUp();
		}
	}, {
		key: 'forceBottom',
		value: function forceBottom() {
			this.refs.card.forceBottom();
		}
	}, {
		key: 'forceLeft',
		value: function forceLeft() {
			this.refs.card.forceLeft();
		}
	}, {
		key: 'forceRight',
		value: function forceRight() {
			this.refs.card.forceRight();
		}
	}, {
		key: 'render',
		value: function render() {
			var Card = this.props.active ? _DraggableCard2.default : _SimpleCard2.default;
			return _react2.default.createElement(Card, _extends({}, this.props, { ref: 'card' }));
		}
	}]);

	return Card;
}(_react.Component);

exports.default = Card;