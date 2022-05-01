import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import {Card} from './index'

let TestCard = (args: any) => {
    return (
        <BrowserRouter>
            <Card {...args} />
        </BrowserRouter>
    )
}

describe("Card test", () => {
    test("Finished card test", () => {
        const element = render(<TestCard value={1} title="Test Card" author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()

        const finishedButton = screen.getByText("Finished")
        expect(finishedButton).toBeInTheDocument()

        const numberOfReads = screen.getByText("1.9k reads")
        expect(numberOfReads).toBeInTheDocument()

        const timeToRead = screen.getByText("13-minute read")
        expect(timeToRead).toBeInTheDocument()


        // fireEvent.click(finishedButton)

        // expect(finishedButton).toHaveAttribute("isFinished", "false")
    })
})

