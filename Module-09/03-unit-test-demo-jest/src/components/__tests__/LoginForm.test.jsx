import { fireEvent, render, screen } from "@testing-library/react"
import LoginForm from "../LoginForm"

describe("LoginForm Component", ()=> {
    it('allow the user to input email and password', ()=> {
        render(<LoginForm onSubmit={()=>{}}/>)
        const emailInput = screen.getByTestId('email-input')
        const passwordInput = screen.getByTestId('password-input')

        fireEvent.change(emailInput, {target: {value: 'test@email.com'}})
        fireEvent.change(passwordInput, {target: {value: "password123"}})

        expect(emailInput).toHaveValue("test@email.com")
        expect(passwordInput).toHaveValue('password123')
    })
})