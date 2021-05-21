import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
