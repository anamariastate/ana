import React from 'react'
import styled, { css } from 'styled-components'
import { up, down } from 'styled-breakpoints'
import Project2 from '~components/pages/work/sales/images/project.svg'

export const Intro = styled.div`
  background-color: ${props => props.color};
  color: #070e55;
  padding: 40px;
  position: relative;
  min-height: 440px;
  margin-bottom: 140px;

  ${down('md')} {
    padding: 40px;
    min-height: auto;
  }

  ${down('sm')} {
    padding: 20px;
    margin-bottom: 40px;
  }
`

export const Illustration = styled.div`
  width: 480px;
  height: 480px;
  margin-right: -100px;
  margin-top: 80px;
  float: right;

  ${down('md')} {
    display: none;
  }
`

export const ProjectImage = styled(Project2)`
  width: 480px;
  height: 480px;
`

export const Headline = styled.h1`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 44px;
  align-items: center;
  margin-bottom: 40px;

  ${down('md')} {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;

  ${down('md')} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const Title = styled.h2``

export const Text = styled.p`
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 100px;

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
  }
`

export const Column = styled.div``

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 60px;
  padding: 40px;
  margin-bottom: 40px;

  ${up('lg')} {
    & h1 {
      font-size: 36px;
    }
  }

  ${({ light }) =>
    light &&
    css`
      background-color: #f1f1e6;
      color: #070e55;
    `}

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 20px;
  }
`

export const No = styled.p`
  color: #787f8d;
  font-size: 36px;
  line-height: 56px;
  margin: 0;
`

export const Img = styled.img`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`

export const Foot = styled.div`
  color: #949aaa;
  font-style: italic;
  border-top: 1px solid #070e55;
  padding-top: 30px;
`