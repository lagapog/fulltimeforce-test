import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Commit from 'components/home/Commit'
import ErrorMessage from 'components/utils/ErrorMessage'
import useSWR from 'swr'

const fetcher = url => fetch(url).then((res) => res.json())

const getCommits = () => {
  const { data, error } = useSWR('/api/commits', fetcher)
  if (error) return <ErrorMessage />
  if (!data) return <CircularProgress />
  return (
    data.map(item => (
      <Commit
        key={item.sha}
        message={item.commit.message}
        author={item.commit.author}
        avatar={item.author.avatar_url}
        sha={item.sha}
        url={item.html_url}
      />
    ))
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}))

const History = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        {getCommits()}
      </Container>
    </div>
  )
}

export default History
