import { Card } from '..'

import React from 'react'
import { render } from 'test/utils'
import { MdSettings, MdCreate, MdMoreHoriz } from 'react-icons/md'

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
              <MdSettings key={1} />,
              <MdCreate key={2} />,
              <MdMoreHoriz key={3} />
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
