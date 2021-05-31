import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { DelayedAutoComplete } from '../../lib/Inputs/DelayedAutoComplete'
import { getFakeUsers } from '../../services/fakejson'

const { Option } = Select

export const DelayedAutoCompleteExample = () => {
  const usersRes = useSWR('users', getFakeUsers, { revalidateOnFocus: false })
  const users = usersRes.data
  const [res, setRes] = useState<any[]>()

  useEffect(() => {
    if (users) {
      setRes(users)
    }
  }, [users])
  return (
    <>
      {res && users && (
        <DelayedAutoComplete
          className="w-full"
          onSearch={(key) => setRes(users.filter((u) => u.name.includes(key)))}
          delay={500}
        >
          {res.map((u) => (
            <Option key={u.id} value={u.name}>
              {u.name}
            </Option>
          ))}
        </DelayedAutoComplete>
      )}
    </>
  )
}
