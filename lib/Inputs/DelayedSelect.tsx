import { Select, SelectProps } from 'antd'
import { SelectValue } from 'antd/lib/select'
import _debounce from 'lodash/debounce'
import React, { useCallback } from 'react'

const DEFAULT_WAIT = 300

export function DelayedSelect<VT extends SelectValue = SelectValue>(
  props: SelectProps<VT> & { delay?: number }
) {
  const { onSearch, delay, children, ...rest } = props

  const debouceOnSearch = useCallback(
    _debounce(onSearch ? onSearch : () => {}, delay || DEFAULT_WAIT),
    []
  )

  return (
    <Select {...rest} onSearch={debouceOnSearch}>
      {children}
    </Select>
  )
}
