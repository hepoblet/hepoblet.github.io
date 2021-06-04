/* eslint-disable react/prop-types */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('antd', () => {
  const antd = jest.requireActual('antd');
  const Menu = ({ children }) => <div>{children}</div>;
  Menu.Item = ({ children }) => <div>{children}</div>;
  return {
    ...antd,
    Menu,
  };
});
