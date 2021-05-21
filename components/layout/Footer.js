import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.primary.main}`
  },
  text: {
    fontSize: theme.spacing(1.5),
    color: '#333',
    textAlign: 'center',
    '& a': {
      color: theme.palette.primary.main
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.text}>
          Created by <a href='https://instagram.com/lagapog'>Luis Agapito</a> with 💖
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
