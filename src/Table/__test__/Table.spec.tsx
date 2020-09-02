import { Table } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Table', () => {
  it('renders correctly', () => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>
      },
      {
        title: 'Age',
        dataIndex: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address'
      }
    ]
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park'
      }
    ]

    const table = render(<Table columns={columns} dataSource={data} />)

    expect(table).toMatchSnapshot()
  })
})
