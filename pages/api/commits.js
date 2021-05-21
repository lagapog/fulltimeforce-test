const baseUrl = 'https://api.github.com'

const handler = async (req, res) => {
  const { method } = req
  const response = await fetch(`${baseUrl}/repos/lagapog/fulltimeforce-test/commits`, {
    headers: { Accept: 'application/vnd.github.v3+json' }
  })
  const data = await response.json()
  switch (method) {
    case 'GET':
      res.status(200).json(data)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
