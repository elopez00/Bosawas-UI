import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Button from './components/inputs/Button'
import styled from 'styled-components'
import './assets/Bosawas.css'


/**
 * Contains the app
 */
class App extends Component {
    render() {
        return (
            <Main>
                <Button style={{margin: 10}}>Click me</Button>
            </Main>
        )
    }
}

// styled components
const Main = styled.div`
    margin: 0;
    height: 100vh;
    width: 100vw;
`

export default hot(module)(App);