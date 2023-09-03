import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { Home } from "."

import { rest } from "msw"
import { setupServer } from "msw/node"

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts',
    (req, res, ctx)=>{
      return res(ctx.json(
        [
          {
            "userId": 1,
            "id": 1,
            "title": "title 1",
            "body": "body 1"
          },
          {
            "userId": 2,
            "id": 2,
            "title": "title 2",
            "body": "body 2"
          },
          {
            "userId": 3,
            "id": 3,
            "title": "title 3",
            "body": "body 3"
          }
        ]
      ))
    }
    
    ),
    rest.get(
      'https://jsonplaceholder.typicode.com/photos',
      (req, res, ctx)=>{
        return res(ctx.json(
          [
            {
              "albumId": 1,
              "id": 1,
              "title": "accusamus beatae ad facilis cum similique qui sunt",
              "url": "https://via.placeholder.com/600/92c952",
              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
              "albumId": 1,
              "id": 2,
              "title": "reprehenderit est deserunt velit ipsam",
              "url": "https://via.placeholder.com/600/771796",
              "thumbnailUrl": "https://via.placeholder.com/150/771796"
            },
            {
              "albumId": 1,
              "id": 3,
              "title": "officia porro iure quia iusto qui ipsa ut modi",
              "url": "https://via.placeholder.com/600/24f355",
              "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            }
          ]
        ))
      }
    )
]
const server = setupServer(...handlers)

describe('<Home/>', ()=>{
  beforeAll(()=>{
    server.listen()
  })

  afterEach(()=>{
    server.resetHandlers()
  })

  afterAll(()=>{
    server.close()
  })

  it('Should load posts and remove no-posts message', async ()=>{
    render(<Home/>)
    const noMorePosts = screen.getByText('Sem resultados')

    await waitForElementToBeRemoved(noMorePosts)

    //screen.debug()
  })
})
