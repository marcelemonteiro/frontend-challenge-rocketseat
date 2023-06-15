'use client'

import styled from "styled-components"

export const SearchBarWrapper = styled.div`
  width: 22rem;
  height: 2.625rem;
  position: relative;
`

export const SearchInput = styled.input`
  width: 22rem;
  height: 2.625rem;
  font-size: var(--text-md);
  font-family: inherit;
  background-color: var(--input-bg);
  border: none;
  border-radius: 0.2rem;
  padding: 10px 130px 10px 16px;
  outline: var(--shape-2);

  :hover {
    opacity: 0.8;
  }
`
export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 9px;
`