import PropTypes from 'prop-types';

export const Children = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]);

export const Style = PropTypes.oneOfType([
    PropTypes.object, // inline style
    PropTypes.number, // style sheet entry
    PropTypes.array,
]);

export default {
    Children,
    Style,
};
