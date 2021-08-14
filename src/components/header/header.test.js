import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import store from '../../store/store'
import Header from './header'

describe('Header Component', () => {
  test('should render Header with title Testing and classname title', () => {
    const { container } = render(<Provider store={store}><Router><Header title="Testing" /></Router></Provider>)
    const tagP = container.querySelector('p')
    expect(tagP).toHaveClass("title")
    expect(tagP).toHaveTextContent("Testing")
  })
})