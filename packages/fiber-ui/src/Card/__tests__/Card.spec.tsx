import { Card } from '..'

import React from 'react'
import { render } from 'test/utils'
import SettingsIcon from '@material-ui/icons/Settings'
import CreateIcon from '@material-ui/icons/Create'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

describe('Card', () => {
  it('renders correctly', () => {
    const card = render(
      <>
        <div>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div>
          <Card
            title='Default size card'
            extra={<a href='#'>More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div>
          <Card title='Medium card' style={{ width: 300 }}>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
          </Card>
          <br />
          <Card title='Small card' size='sm' style={{ width: 300 }}>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
          </Card>
        </div>
        <div>
          <div
            style={{
              width: 300,
              background: 'rgb(236, 236, 236)',
              padding: 30
            }}
          >
            <Card title='No borders' style={{ width: 300 }} bordered={false}>
              <p style={{ margin: 0 }}>Card content</p>
              <p style={{ margin: 0 }}>Card content</p>
              <p style={{ margin: 0 }}>Card content</p>
            </Card>
          </div>
        </div>
        <div>
          <Card title='Hoverable' style={{ width: 300 }} hoverable>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
          </Card>
        </div>
        <div>
          <Card
            title='Actions'
            style={{ width: 300 }}
            actions={[
              <SettingsIcon key={1} />,
              <CreateIcon key={2} />,
              <MoreHorizIcon key={3} />
            ]}
          >
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
            <p style={{ margin: 0 }}>Card content</p>
          </Card>
        </div>
      </>
    )

    expect(card).toMatchSnapshot()
  })
})
