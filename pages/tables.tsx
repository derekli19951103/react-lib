import { Typography } from 'antd'
import React from 'react'
import { Layout } from '../components/Layout'
import { ExpandableTableExample } from '../examples/Tables/ExpandableTableExample'

export default function Tables() {
  return (
    <Layout>
      <Typography.Title>Expandable Table</Typography.Title>
      <ExpandableTableExample />
    </Layout>
  )
}
