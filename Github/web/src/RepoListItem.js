import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const RepoListItem = ({ result }) => (
  <ListItem divider>
    <ListItemAvatar>
      <Avatar alt={result.owner.login} src={result.owner.avatar_url} />
    </ListItemAvatar>
    <ListItemText primary={`${result.name}`} />
  </ListItem>
);

RepoListItem.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    }).isRequired
  }).isRequired
};
export default RepoListItem;
