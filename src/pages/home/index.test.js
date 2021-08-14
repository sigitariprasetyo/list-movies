import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import store from '../../store/store'
import Home from './index'

describe('Home page', () => {
  test('should render Home with Header and connect with redux store', () => {
    const { getByText } = render(<Provider store={store}><Router><Home /></Router></Provider>)
    expect(getByText('List Movies from omdbAPI')).toBeInTheDocument()
  })

  test('it should have text input with placeholder value Search movies', () => {
    const { getAllByPlaceholderText } = render(<Provider store={store}><Router><Home /></Router></Provider>)
    expect(getAllByPlaceholderText('Search movies')[0]).toContainHTML('<input class="input" placeholder="Search movies" type="text" value="" />')
  })

  test('it should cahange value keySearch if onchange true', () => {
    const { getAllByPlaceholderText } = render(<Provider store={store}><Router><Home /></Router></Provider>)
    const input = getAllByPlaceholderText('Search movies')[0]
    fireEvent.change(input, { target: { value: "Batman" }, handleChange: true })
    expect(input).toHaveValue("Batman")
  })

  test('it should allow to delete value of input', () => {
    const { getAllByPlaceholderText } = render(<Provider store={store}><Router><Home /></Router></Provider>)
    const input = getAllByPlaceholderText('Search movies')[0]
    fireEvent.change(input, { target: { value: "Batman" }, handleChange: true })
    expect(input).toHaveValue("Batman")
    fireEvent.change(input, { target: { value: "" }, handleChange: true })
    expect(input).toHaveValue("")
  })

  // test('Should change value q if onchange true', () => {
  //   const { getByTestId } = render(<Provider store={store}><Router><Navbar /></Router></Provider>)
  //   expect(getByTestId('q-input')).toBeInTheDocument()
  //   const Qinput = getByTestId('q-input')
  //   fireEvent.change(Qinput, { target: { value: 'abcd' }, handleChange: true })
  //   const formInput = getByTestId('form-search')
  //   fireEvent.submit(formInput, { handleSubmit: true, searchPassword: true })

  // })
})