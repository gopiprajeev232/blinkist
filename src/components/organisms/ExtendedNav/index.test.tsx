import {screen, render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { ExtendedNav } from '.'

let TestExtendedNav = () => {
    return (
        <MemoryRouter>
            <ExtendedNav />
        </MemoryRouter>
    )
}

describe("Extended Nav Test", () => {
    test("Nav test", () => {
        render(<TestExtendedNav />)
        
        let politics = screen.getByText("Politics")
        expect(politics).toBeInTheDocument
    })
})