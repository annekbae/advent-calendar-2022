import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import './App.css'
import { AppName } from './interfaces'
import DoorGrid from './components/DoorGrid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


export default function App({ name }: AppName) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        {DoorGrid()}
      </div>
    </div>
  )
}