import { Select } from 'antd'
import React from 'react'
import useSWR from 'swr'
import { DelayedSelect } from '../../lib/Inputs/DelayedSelect'
import { getFakeUsers } from '../../services/fakejson'

const { Option } = Select

export const DelayedSelectExample = () => {
  const usersRes = useSWR('users', getFakeUsers, { revalidateOnFocus: false })
  const users = usersRes.data

  return (
    <>
      {users && (
        <DelayedSelect showSearch className="w-full" delay={300}>
          {users.map((u) => (
            <Option key={u.id} value={u.name}>
              {u.name}
            </Option>
          ))}
        </DelayedSelect>
      )}
    </>
  )
}
