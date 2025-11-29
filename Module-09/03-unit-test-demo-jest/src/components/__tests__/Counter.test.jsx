import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "../Counter"


describe("Counter component", ()=> {
    it("Displays the inital count", ()=> {
        render(<Counter />)
        expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')
    })

    it("increments count when button is clicked", () => {
        render(<Counter />)
        const button = screen.getByText('Increment')
        fireEvent.click(button)
        expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1')
    })
})