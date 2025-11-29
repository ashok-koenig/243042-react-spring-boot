import { render, screen } from "@testing-library/react"
import Greeting from "../Greeting"

describe("Greeting component", ()=> {
    it("Displays the correct greeting message", ()=>{
        render(<Greeting name="John"/>)
        expect(screen.getByText('Hello, John!')).toBeInTheDocument();
    })
})