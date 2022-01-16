import React from 'react'
import styled from "styled-components"

export const Button = styled.button`
  border: 1px solid #f00;
  color: orange;
`


const ButtonComponent = () => {
    return (
        <Button>
            Submit
        </Button>
    )
}

export default ButtonComponent;
