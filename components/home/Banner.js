import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  title: {
    color: '#333',
    fontSize: theme.spacing(6)
  }
}))

const Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Typography component='h1' className={classes.title}>
          Commit history
        </Typography>
        <Typography className={classes.paragraph}>
          These are all the commits on this project
        </Typography>
      </Container>
    </div>
  )
}

export default Banner
