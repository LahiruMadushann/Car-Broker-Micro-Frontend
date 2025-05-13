import React, { useEffect, useState } from 'react';
import { Tabs, Card, Input, Button, Typography, Form, Table, Tag, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import BuyerDetailsTable from 'inventory/BuyerDetailsTable';
import { buyerApi } from 'shared/buyerApi';
import { useDispatch, useSelector } from 'react-redux';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const AdminPanelPage = () => {
  const [activeTab, setActiveTab] = useState('1');
  const dispatch = useDispatch();
  
  const [buyersData, setBuyersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    const fetchBuyers = async () => {
      try {
        const result = await dispatch(buyerApi.endpoints.getAllBuyers.initiate());
        if (result.data) {
          setBuyersData(result.data);
          console.log("Buyers data:", result.data);
          setIsLoading(false);
        }
        if (result.error) {
          console.error("Error fetching buyers:", result.error);
          setError(result.error);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Exception fetching buyers:", err);
        setError(err);
        setIsLoading(false);
      }
    };

    fetchBuyers();
    
  }, [dispatch]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const renderBuyerTable = () => {
    if (isLoading) {
      return <div className="text-center py-8">Loading buyer data...</div>;
    }
    
    if (error) {
      return (
        <div className="text-center py-8 text-red-500">
          Failed to load buyer data. Please try again.
        </div>
      );
    }
    
    if (!buyersData || buyersData.length === 0) {
      return (
        <div className="bg-gray-50 p-6 rounded-md text-center">
          <Text className="text-gray-400">No buyer data available.</Text>
        </div>
      );
    }
    
    const columns = [
      {
        title: 'Buyer ID',
        dataIndex: 'buyerId',
        key: 'buyerId',
      },
      {
        title: 'Buyer Name',
        dataIndex: 'buyerName',
        key: 'buyerName',
      },
      {
        title: 'Phone Number',
        dataIndex: 'buyerPhoneNumber',
        key: 'buyerPhoneNumber',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Introduction Fee',
        dataIndex: 'introductionFee',
        key: 'introductionFee',
        render: fee => `$${fee}`,
      },
      {
        title: 'Referral Fee',
        dataIndex: 'referralFee',
        key: 'referralFee',
        render: fee => `$${fee}`,
      },
      {
        title: 'Location',
        key: 'location',
        render: (_, record) => (
          <span>{record.city}, {record.district} ({record.postalCode})</span>
        ),
      },
      {
        title: 'Branch',
        dataIndex: 'branch',
        key: 'branch',
      },
      {
        title: 'Speciality',
        dataIndex: 'speciality',
        key: 'speciality',
        render: speciality => (
          <Tag color="blue">{speciality}</Tag>
        ),
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <Space size="middle">
            <Button type="link" size="small">View</Button>
            <Button type="link" size="small">Edit</Button>
          </Space>
        ),
      },
    ];
    
    return <Table columns={columns} dataSource={buyersData} rowKey="buyerId" />;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Tabs 
        activeKey={activeTab} 
        onChange={handleTabChange}
        type="card"
        className="w-full"
        tabBarStyle={{ marginBottom: 24 }}
      >
        <TabPane tab="Assessment Request List" key="1">
          <div className="bg-white rounded-lg shadow">
            <BuyerDetailsTable />
          </div>
        </TabPane>
        
        <TabPane tab="List Of Buyers" key="2">
          <Card className="shadow-md">
            <div className="p-4">
              <Title level={4} className="mb-2">Buyer List</Title>
              <Text className="text-gray-500 mb-6 block">
                View and manage all buyers in the system.
              </Text>
              
              {renderBuyerTable()}
            </div>
          </Card>
        </TabPane>
        
        <TabPane tab="Buyer Details" key="3">
          <Card className="shadow-md">
            <div className="mb-4 border-b pb-4">
              <Title level={4} className="mb-1">Password</Title>
              <Text className="text-gray-500">
                Change your password here. After saving, you'll be logged out.
              </Text>
            </div>
            
            <Form layout="vertical" className="px-1 py-2">
              <Form.Item 
                label="Current password" 
                name="currentPassword"
                className="mb-4"
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="Enter current password" 
                  className="w-full"
                />
              </Form.Item>
              
              <Form.Item 
                label="New password" 
                name="newPassword"
                className="mb-6"
              >
                <Input.Password 
                  prefix={<LockOutlined className="text-gray-400" />} 
                  placeholder="Enter new password" 
                  className="w-full"
                />
              </Form.Item>
              
              <div className="flex justify-end">
                <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
                  Save password
                </Button>
              </div>
            </Form>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminPanelPage;