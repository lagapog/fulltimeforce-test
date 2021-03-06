import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: 'auto 1fr 100px',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  name: {
    fontWeight: 'bold'
  },
  author: {
    fontSize: theme.spacing(1.8),
    color: '#999',
    '& span': {
      marginLeft: theme.spacing(1),
      color: '#666',
      fontSize: theme.spacing(1.6)
    }
  }
}))

const Commit = ({ message, author, avatar, sha, url }) => {
  const classes = useStyles()
  const shortenSha = sha.slice(0, 8)
  const formattedDate = formatDistanceToNow(new Date(author.date))
  return (
    <Paper className={classes.root}>
      <Avatar src={avatar} />
      <div>
        <Typography className={classes.message}>
          {message}
        </Typography>
        <Typography className={classes.author}>
          {author.name}
          <span>committed {formattedDate} ago</span>
        </Typography>
      </div>
      <Chip
        label={shortenSha}
        component='a'
        href={url}
        target='_blank'
        clickable
      />
    </Paper>
  )
}

Commit.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  sha: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Commit
