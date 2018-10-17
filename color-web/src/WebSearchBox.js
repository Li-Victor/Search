import React from 'react';
import PropTypes from 'prop-types';
import WebSearchInput from './WebSearchInput';
import WebSearchResult from './WebSearchResult';

import SearchBox from './SearchBox';

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
