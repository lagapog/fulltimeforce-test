import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    color: '#fff'
  }
}))

const ErrorMessage = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography>
        Something went wrong. Please try refreshing the page.
      </Typography>
    </Paper>
  )
}

export default ErrorMessage
