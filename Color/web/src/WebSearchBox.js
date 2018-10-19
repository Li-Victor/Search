import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from '@color/shared/SearchBox';
import WebSearchInput from './WebSearchInput';
import WebSearchResult from './WebSearchResult';

const WebSearchFrame = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

WebSearchFrame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const WebSearchBox = (Context, ListItem) => SearchBox(Context, WebSearchFrame, WebSearchInput, WebSearchResult(ListItem));

export default WebSearchBox;
