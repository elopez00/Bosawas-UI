import React from 'react'
import styled from 'styled-components'

const CButton = styled.button`
    background: orange;
    color: white;
`
export default function Button(props) {
    return (
        <CButton>Click me</CButton>
    )
}