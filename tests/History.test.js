import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import History from '../components/home/History'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders commits history', async () => {
  const fakeCommits = [
    {
      sha: '1329sqer391jdqoaiqoi1923dasjdsa9331544331asdarwqrjnvwncq',
      html_url: 'https://github.com/project/commit/1',
      commit: {
        message: 'Commit number one',
        author: {
          name: 'First Committer',
          date: '2021-05-21T08:09:12Z'
        }
      },
      author: {
        avatar_url: 'https://github.com/user/avatar/1'
      }
    },
    {
      sha: '4189128adadkej1flkmel1039lfakdlkedjnda13139alkdalvnfeasa',
      html_url: 'https://github.com/project/commit/2',
      commit: {
        message: 'Commit number two',
        author: {
          name: 'Second Committer',
          date: '2021-05-21T08:08:25Z'
        }
      },
      author: {
        avatar_url: 'https://github.com/user/avatar/1'
      }
    }
  ]
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeCommits)
    })
  )

  await act(async () => {
    render(<History />, container)
  })

  // check first commit
  const firstCommit = container.querySelector('#history > div:nth-of-type(1)')

  expect(firstCommit.querySelector('div:nth-of-type(1) > img').getAttribute('src'))
    .toBe(fakeCommits[0].author.avatar_url)
  expect(firstCommit.querySelector('div:nth-of-type(2) > p:nth-of-type(1)').textContent)
    .toBe(fakeCommits[0].commit.message)

  // check second commit
  const SecondCommit = container.querySelector('#history > div:nth-of-type(2)')

  expect(SecondCommit.querySelector('div:nth-of-type(1) > img').getAttribute('src'))
    .toBe(fakeCommits[1].author.avatar_url)
  expect(firstCommit.querySelector('div:nth-of-type(2) > p:nth-of-type(1)').textContent)
    .toBe(fakeCommits[0].commit.message)
})
