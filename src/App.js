import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import Button from './components/Button'

const Block = styled.div`
    height: 100px;
    width: 100px;
    background: red;
`
/**
 * Contains the app
 */
class App extends Component {
    render() {
        return (
            <div>
                tes test
                <Button></Button>
            </div>
        )
    }
}

export default hot(module)(App);