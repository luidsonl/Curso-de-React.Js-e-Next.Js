import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock

describe('<PostCard/>', ()=>{
    it('Should render postcard correctly', ()=>{

    render(<PostCard {...props} />);
    
    expect(screen.getByRole('img', {name: /title 1/i}))
    .toHaveAttribute('src', 'cover.png');

    expect(screen.getByAltText('title 1'))
    .toBeInTheDocument()

    expect(screen.getByRole('heading', {name: 'title 1 1'}))
    .toBeInTheDocument();

    expect(screen.getByText('body 1'))
    .toBeInTheDocument();
    })

    it('Should match snapshot', ()=>{

        const {container} = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot()
    })
})