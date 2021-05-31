import { Layout, Menu } from 'antd'
import { SiderProps } from 'antd/lib/layout/Sider'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const { Sider } = Layout
export const SideBar = (
  props: SiderProps & React.RefAttributes<HTMLDivElement>
) => {
  const router = useRouter()
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>()

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  useEffect(() => {
    setSelectedKeys([router.pathname])
  }, [router.pathname])

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={className}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        onSelect={({ key }) => router.push(key.toString())}
      >
        <Menu.Item key="/">Playground</Menu.Item>
        <Menu.Item key="/tables">Tables</Menu.Item>
        <Menu.Item key="/inputs">Inputs</Menu.Item>
      </Menu>
    </Sider>
  )
}
