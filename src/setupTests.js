const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
require('jest-canvas-mock');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });