import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('<Button/>', ()=>{
    it('Should render a button with the text "Load more"', ()=>{
        render(<Button text="Load more"/>)
        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i})
        
        expect(button).toBeInTheDocument()
    })

    it('Should call function on button click"', ()=>{
        const fn = jest.fn()

        render(<Button text="Load more" onClick = {fn}/>)

        const button = screen.getByRole('button', {name: /load more/i})

        fireEvent.click(button)
        fireEvent.click(button)

        expect(fn).toHaveBeenCalled()

    })

    it('Should be disabled when disabled is true', ()=>{

        render(<Button text="Load more" disabled={true}/>)

        const button = screen.getByRole('button', {name: /load more/i})


        expect(button).toBeDisabled()

    })
    it('Should be enabled when disabled is false', ()=>{

        render(<Button text="Load more" disabled={false}/>)

        const button = screen.getByRole('button', {name: /load more/i})


        expect(button).toBeEnabled()

    })
})