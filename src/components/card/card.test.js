import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import store from '../../store/store'
import Card from './card'

describe('Card Component', () => {
  test('should have modal with tag img with src and alt attribute', () => {
    const { container } = render(<Provider store={store}><Router><Card imdbID={12345} poster={"poster.png"} title="Batman" modalShow={1} setModalShow={() => { return }} index={0} /></Router></Provider>)
    const tagImage = container.querySelector('img')
    expect(tagImage).toHaveAttribute("src")
    expect(tagImage).toHaveAttribute("alt")
  })

  test('it should have card with tag img and have src and alt attribute', () => {
    const { container } = render(<Provider store={store}><Router><Card imdbID={12345} poster={"poster.png"} title="Batman" modalShow={1} setModalShow={() => { return }} index={0} /></Router></Provider>)
    const imageCardDetail = container.querySelectorAll('img')[1]
    expect(imageCardDetail).toHaveAttribute("src")
    expect(imageCardDetail).toHaveAttribute("alt")
    expect(imageCardDetail).toHaveClass("poster")
  })

  test('it should have tag p and have classname p-20 and children value Batman', () => {
    const { container } = render(<Provider store={store}><Router><Card imdbID={12345} poster={"poster.png"} title="Batman" modalShow={1} setModalShow={() => { return }} index={1} /></Router></Provider>)
    const tagP = container.querySelector('p')
    expect(tagP).toHaveClass("p-20")
    expect(tagP).toHaveTextContent("Batman")
  })
})