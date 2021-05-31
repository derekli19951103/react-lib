import React from 'react'
import { ExpandableTable } from '../../lib/Tables/ExpandableTable'

export const ExpandableTableExample = () => {
  return (
    <ExpandableTable
      rowKey="id"
      dataSource={[
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: 'delectus aut autem',
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: 'delectus aut autem',
          completed: false
        }
      ]}
      columns={[
        {
          key: 'userId',
          title: 'User Id',
          dataIndex: 'userId',
          checked: true
        },
        {
          key: 'id',
          title: 'Id',
          dataIndex: 'id',
          ignored: true,
          checked: true
        },
        { key: 'title', title: 'Title', dataIndex: 'title', disabled: true },
        { key: 'completed', title: 'Completed', dataIndex: 'completed' }
      ]}
    />
  )
}
