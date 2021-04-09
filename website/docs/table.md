---
id: table
title: Table
---

This is for table.

## Example

```js
import { Table } from 'fiber-ui'
```

### Regular

```js live
function RegularTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <React.Fragment>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'blue' : 'green'
            if (tag === 'loser') {
              color = 'orange'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </React.Fragment>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      )
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  return <Table columns={columns} dataSource={data} />
}
```

### Selection

```js live
function SelectionTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  }

  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
      <Divider />
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
```

### Control Selection

```js live
function ControlSelectionTable() {
  const [selection, setSelection] = useState([])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>
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

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelection(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys: selection,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  }

  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
```

### Pagination

```js live
function PaginationTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
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

  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`
    })
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        showQuickJumper: true
      }}
    />
  )
}
```

### Hover Type

```js live
function HoverTypeTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>
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

  return (
    <div>
      <Table columns={columns} dataSource={data} hoverType='cell' />
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        hoverType='row'
        onRowClick={(record) => {
          console.log(record)
        }}
      />
    </div>
  )
}
```

### Clickable Cells

```js live
function ClickableCellsTable() {
  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'categoryName',
      onClick: (value) => {
        console.log(value)
      }
    },
    {
      title: 'Updated Time',
      dataIndex: 'updatedTime',
      onClick: (value) => {
        console.log(value)
      }
    },
    {
      title: 'Past Content',
      dataIndex: 'pastContent',
      onClick: (value) => {
        console.log(value)
      },
      ellipsis: true
    },
    {
      title: 'New Content',
      dataIndex: 'newContent',
      render: (text) => <Text strong>{text}</Text>,
      onClick: (value) => {
        console.log(value)
      },
      ellipsis: true
    },
    {
      title: 'Change',
      dataIndex: 'change',
      onClick: (value) => {
        console.log(value)
      }
    }
  ]

  const data = [
    {
      key: '1',
      categoryName: 'Category 1',
      updatedTime: '8/9/20 13:00 PM',
      pastContent: 19,
      newContent: 25,
      change: '+5 (31.58%)'
    },
    {
      key: '2',
      categoryName: 'Category 2',
      updatedTime: '8/8/20 13:00 PM',
      pastContent:
        'Mauris ac dui id lectus dignissim convallis at a ex. Nullam commodo viverra dolor, quis placerat velit consequat et. In hac habitasse platea dictumst. Curabitur vitae porta sem. Aliquam non ligula erat. Aenean ac tincidunt justo, nec condimentum risus. Sed pulvinar tempor dolor dictum maximus. Aenean molestie, mi eu fermentum lacinia, augue massa tristique lorem, ut sollicitudin justo mi tristique libero.',
      newContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras luctus sodales libero viverra mollis. Praesent fermentum felis eget augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat fringilla, varius diam sit amet, consectetur tellus. Morbi et purus odio.',
      change: 'Click to see change'
    },
    {
      key: '3',
      categoryName: 'Category 3',
      updatedTime: '8/4/20 13:00 PM',
      pastContent: 19.28,
      newContent: 15.62,
      change: '-3.66 (18.98%)'
    },
    {
      key: '4',
      categoryName: 'Category 4',
      updatedTime: '8/3/20 9:00 PM',
      pastContent:
        'Sed imperdiet dignissim massa ac efficitur. Suspendisse vitae sem lacinia, fringilla diam ut, tempor massa. Aliquam vitae elit erat. Proin non metus eleifend, iaculis mi volutpat, rutrum massa. Praesent consectetur eros mattis augue feugiat porttitor. Maecenas sem turpis, congue vitae faucibus id, consectetur vel lectus. Maecenas pretium neque quis vestibulum eleifend. Praesent et lacus dapibus, tempor diam in, mattis neque. Pellentesque at dapibus mi, quis scelerisque urna. In hac habitasse platea dictumst. Sed id tortor ut neque elementum finibus ornare non risus. Proin tempus imperdiet dignissim. Pellentesque rhoncus, metus quis ornare viverra, est urna ultrices ex, id tempus ipsum urna et dui. Etiam rhoncus tempor blandit. Proin posuere ultricies elit.',
      newContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras luctus sodales libero viverra mollis. Praesent fermentum felis eget augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat fringilla, varius diam sit amet, consectetur tellus. Morbi et purus odio.',
      change: 'Click to see change'
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ hideOnSinglePage: true }}
    />
  )
}
```
