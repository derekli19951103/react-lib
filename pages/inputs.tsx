import { Typography } from 'antd'
import React from 'react'
import { Layout } from '../components/Layout'
import { DelayedAutoCompleteExample } from '../examples/Inputs/DelayedAutoCompleteExample'
import { DelayedSelectExample } from '../examples/Inputs/DelayedSelectExample'
import { DelayedInput } from '../lib/Inputs/DelayedInput'
import { DelayedInputNumber } from '../lib/Inputs/DelayedInputNumber'

export default function Inputs() {
  return (
    <Layout>
      <Typography.Title>Delayed Input</Typography.Title>
      <DelayedInput onChange={console.log} />
      <Typography.Title>Delayed InputNumber</Typography.Title>
      <DelayedInputNumber onChange={console.log} />
      <Typography.Title>Delayed AutoComplete</Typography.Title>
      <DelayedAutoCompleteExample />
      <Typography.Title>Delayed Select</Typography.Title>
      <DelayedSelectExample />
    </Layout>
  )
}
