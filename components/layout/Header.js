import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>
          Fulltimeforce Test
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
