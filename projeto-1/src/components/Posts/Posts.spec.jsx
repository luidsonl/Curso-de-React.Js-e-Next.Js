import { render, screen } from '@testing-library/react'
import { Posts } from '.'

const props = {
    posts: [
        {   
            key: 1,
            id: 1,
            title: 'Title 1',
            body: 'Body 1',
            cover: 'img/cover1.png',
        },
        {
            key: 2,
            id: 2,
            title: 'Title 2',
            body: 'Body 2',
            cover: 'img/cover2.png',
        },
        {
            key: 3,
            id: 3,
            title: 'Title 3',
            body: 'Body 3',
            cover: 'img/cover3.png',
        },
    ]
}

describe('<Posts/>', ()=>{
    it('Should render posts correctly',()=>{
        render(<Posts {...props}/>)

        expect(screen.getAllByRole('heading', {name: /title/i}))
        .toHaveLength(3)

        expect(screen.getAllByRole('img', {name: /title/i}))
        .toHaveLength(3)

        expect(screen.getAllByText(/body/i))
        .toHaveLength(3)

        expect(screen.getByRole('img', {name: /title 3/i}))
        .toHaveAttribute('src', 'img/cover3.png')
    })

    it('Should not render posts if there r no posts', ()=>{
        render(<Posts/>)

        expect(screen.queryByRole('heading', {name: /title/i}))
        .not.toBeInTheDocument()
    })

    it('Should match snapshot', ()=>{
        const {container} = render(<Posts {...props}/>)

        expect(container.firstChild).toMatchSnapshot()
    })
})