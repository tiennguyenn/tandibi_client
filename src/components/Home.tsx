import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const Home: React.FC = () => {
  const defaultData: ProductType[] = [
    {
      id: '1',
      name: 'Mike',
      price: 32,
      img_url: '10 Downing Street',
    },
    {
      id: '2',
      name: 'John',
      price: 42,
      img_url: '10 Downing Street',
    },
  ];

  type ProductType = {
    id: string,
    name: string,
    price: number,
    img_url: string
  }

  const [dataSource, setDataSource]  = useState<ProductType[]>(defaultData);
  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2M2IyNmMxZC1mYmQ2LTQ1ZWYtYjJkMC1jYmJhOTkwMzhmM2IiLCJzdWIiOiIxNSIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTcyMjQ5NTMyNiwiZXhwIjoxNzIyNDk1OTI2fQ.orPZ0lb2M0zFbfbUPcZoA8EIPx8Q5rvY_bg2VcztJgw';
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    axios.get('http://localhost:3000/products', {headers}).then((response) => setDataSource(response.data));
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'img_url',
      key: 'img_url',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
}

export default Home;