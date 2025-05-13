import React, { useState } from 'react';
import { Table, Input, Button, Dropdown, Menu, Checkbox, Space, Typography } from 'antd';
import { SearchOutlined, DownOutlined, MoreOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

const { Text } = Typography;

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

const BuyerDetailsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortedInfo, setSortedInfo] = useState({});
  const [visibleColumns, setVisibleColumns] = useState(['select', 'status', 'email', 'amount', 'actions']);

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // Handle sorting
  const handleSort = (column, order) => {
    setSortedInfo({
      columnKey: column,
      order: order,
    });
  };

  // Toggle column visibility
  const toggleColumnVisibility = (columnKey) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns(visibleColumns.filter(key => key !== columnKey));
    } else {
      setVisibleColumns([...visibleColumns, columnKey]);
    }
  };

  // Get status tag color
  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Copy payment ID to clipboard
  const copyPaymentId = (id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
    }
  };

  // Dropdown menu for row actions
  const actionMenu = (record) => (
    <Menu>
      <Menu.Item key="copy" onClick={() => copyPaymentId(record.id)}>
        Copy payment ID
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="view-customer">View customer</Menu.Item>
      <Menu.Item key="view-payment">View payment details</Menu.Item>
    </Menu>
  );

  // Dropdown menu for column visibility
  const columnMenu = (
    <Menu>
      <Menu.Item key="status">
        <Checkbox 
          checked={visibleColumns.includes('status')} 
          onChange={() => toggleColumnVisibility('status')}
        >
          Status
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="email">
        <Checkbox 
          checked={visibleColumns.includes('email')} 
          onChange={() => toggleColumnVisibility('email')}
        >
          Email
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="amount">
        <Checkbox 
          checked={visibleColumns.includes('amount')} 
          onChange={() => toggleColumnVisibility('amount')}
        >
          Amount
        </Checkbox>
      </Menu.Item>
    </Menu>
  );

  // Define columns
  const columns = [
    {
      title: <Checkbox 
              checked={selectedRowKeys.length === data.length} 
              indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < data.length}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedRowKeys(data.map(item => item.id));
                } else {
                  setSelectedRowKeys([]);
                }
              }}
            />,
      dataIndex: 'select',
      key: 'select',
      width: 50,
      render: () => null,
      hidden: !visibleColumns.includes('select'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(status)}`}>
          {status}
        </span>
      ),
      hidden: !visibleColumns.includes('status'),
    },
    {
      title: () => (
        <div className="flex items-center">
          <span>Email</span>
          <Button 
            type="text" 
            icon={sortedInfo.columnKey === 'email' ? 
                  (sortedInfo.order === 'ascend' ? <SortAscendingOutlined /> : <SortDescendingOutlined />) : 
                  <SortAscendingOutlined />} 
            onClick={() => handleSort('email', sortedInfo.order === 'ascend' && sortedInfo.columnKey === 'email' ? 'descend' : 'ascend')}
            className="ml-1"
            size="small"
          />
        </div>
      ),
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      render: (email) => <Text className="lowercase">{email}</Text>,
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value, record) => record.email.toLowerCase().includes(value.toLowerCase()),
      hidden: !visibleColumns.includes('email'),
    },
    {
      title: () => <div className="text-right">Amount</div>,
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <div className="text-right font-medium">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)}
        </div>
      ),
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sortedInfo.columnKey === 'amount' && sortedInfo.order,
      hidden: !visibleColumns.includes('amount'),
    },
    {
      title: '',
      key: 'actions',
      render: (_, record) => (
        <Dropdown overlay={actionMenu(record)} trigger={['click']} placement="bottomRight">
          <Button type="text" icon={<MoreOutlined />} className="h-8 w-8 p-0" />
        </Dropdown>
      ),
      width: 50,
      hidden: !visibleColumns.includes('actions'),
    },
  ].filter(col => !col.hidden);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          prefix={<SearchOutlined className="text-gray-400" />}
          value={searchText}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Dropdown overlay={columnMenu} trigger={['click']} placement="bottomRight">
          <Button type="default" className="ml-auto flex items-center">
            Columns <DownOutlined className="ml-1" />
          </Button>
        </Dropdown>
      </div>
      <div className="rounded-md border border-gray-200">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{
            showSizeChanger: false,
            size: 'small',
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
          size="middle"
          className="ant-table-custom"
        />
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-gray-500">
          {selectedRowKeys.length} of {data.length} row(s) selected.
        </div>
      </div>
    </div>
  );
};

export default BuyerDetailsTable;