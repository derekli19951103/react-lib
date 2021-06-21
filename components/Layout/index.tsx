import { Col, Layout as AntdLayout, Row } from 'antd'
import React, { ReactNode } from 'react'
import { SideBar } from './SideBar'

const { Header, Content } = AntdLayout

export const Layout = (props: { children?: ReactNode }) => {
  const { children } = props

  return (
    <AntdLayout style={{ height: '100vh' }}>
      <Header>
        <Row justify="space-between" align="middle">
          <Col>
            <div style={{ color: 'white' }}>TOOLS</div>
          </Col>
          <Col></Col>
        </Row>
      </Header>
      <AntdLayout>
        <SideBar />
        <Content style={{ overflowY: 'scroll' }} className="relative">
          <div style={{ padding: '20px 20px 50px' }}>{children}</div>
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}
