'use client'

import styled from "styled-components"

export const HeaderComponent = styled.header`
  height: 5rem;
  background-color: var(--shape-1);
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 var(--container);
`

export const Title = styled.h1`
  flex: 1;

  a {
    color: var(--brand);
    font-size: var(--text-brand);
  }
`

export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.6rem;
  position: relative;
`

export const CartButton = styled.button`
  background-color: var(--shape-1);
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

export const CartItemsSign = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--red);
  font-size: var(--text-xsm);
  font-weight: 500;
  color: #FFF;
  text-align: center;
  position: absolute;
  right: -6px;
  bottom: -6px;
`