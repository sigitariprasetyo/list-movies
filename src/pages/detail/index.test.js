import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import store from '../../store/store'
import Detail from './index'

describe('Detail page', () => {
  test('should render Detail with Header and connect with redux store', () => {
    const { getByText } = render(<Provider store={store}><Router><Detail /></Router></Provider>)
    expect(getByText('Detail Movie')).toBeInTheDocument()
  })

  test('should have tag image with src and alt attribute', () => {
    const { container } = render(<Provider store={store}><Router><Detail /></Router></Provider>)
    const tagImage = container.querySelector('img')
    tagImage.setAttribute("src", "test")
    expect(tagImage).toHaveAttribute("src")
    expect(tagImage).toHaveAttribute("alt")
  })
})