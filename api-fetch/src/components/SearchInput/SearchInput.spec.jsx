import { render, screen } from '@testing-library/react'
import { SearchInput } from '.'
import userEvent from '@testing-library/user-event'

describe('<SearchInput/>', ()=>{
    it('Should have a value of searchValue',()=>{
        const fn = jest.fn()
        render(<SearchInput handleChange={fn} searchValue={'Teste'}/>)

        const input = screen.getByPlaceholderText(/digite sua busca/i)
        
        expect(input.value).toBe('Teste')
    })

    it('Should call handlechange function on update',()=>{
        const fn = jest.fn()
        render(<SearchInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/digite sua busca/i)

        const value = 'valor'

        userEvent.type(input, value)

        expect(fn).toBeCalledTimes(value.length)
        
    })

    it('Should shoud match snapshot',()=>{
        const fn = jest.fn()
        const {container} = render(<SearchInput handleChange={fn} />)

        expect(container).toMatchSnapshot()
        
    })

})