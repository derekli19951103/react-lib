import { InputNumber, InputNumberProps } from 'antd'
import _debounce from 'lodash/debounce'
import React, { useCallback } from 'react'

const DEFAULT_WAIT = 300

export const DelayedInputNumber = (
  props: InputNumberProps & { delay?: number }
) => {
  const { onChange, delay, ...rest } = props

  const debouceOnChange = useCallback(
    _debounce(onChange ? onChange : () => {}, delay || DEFAULT_WAIT),
    []
  )

  return <InputNumber {...rest} onChange={debouceOnChange} />
}
