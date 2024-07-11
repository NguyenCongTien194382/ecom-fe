'use client'

import React, { useState } from 'react';
import PieChart from '@/components/commons/PieChart';
import { ChartData, ChartOptions } from 'chart.js';
import BarChart from '@/components/commons/BarChart';

const HomePage: React.FC = () => {
  const [statsAuthType, setStatsAuthType] = useState([])
  const [statsRank, setStatsRank] = useState([])
  const [statsCreatedAt, setStatsCreatedAt] = useState([])

  const data1: ChartData<'pie'> = {
    labels: statsAuthType.map((item: any) => item._id),
    datasets: [
      {
        data: statsAuthType.map((item: any) => Number(item.count)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2: ChartData<'pie'> = {
    labels: statsRank.map((item: any) => item._id),
    datasets: [
      {
        data: statsRank.map((item: any) => Number(item.count)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const data3: ChartData<'bar'> = {
    labels: statsCreatedAt.map((item: any) => item._id),
    datasets: [
      {
        label: 'register',
        data: statsCreatedAt.map((item: any) => Number(item.count)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 60,
      },
    ],
  };

  React.useEffect(() => {
    handleGetSummaryUser()
  }, [])

  const handleGetSummaryUser = async () => {
    const res = await fetch('http://localhost:9000/api/user/summary', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data?.data?.statsAuthType) {
      setStatsAuthType(data?.data?.statsAuthType)
      setStatsRank(data?.data?.statsRank)
      setStatsCreatedAt(data?.data?.statsCreatedAt)
    }
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <div className='text-center font-semibold text-2xl mb-4'>
            Loại tài khoản
          </div>
          <PieChart data={data1} />
        </div>
        <div className='col-span-1'>
          <div className='text-center font-semibold text-2xl mb-4'>
            Hạng thẻ
          </div>
          <PieChart data={data2} />
        </div>
      </div>
      <div className='mt-10'>
        <div className='text-center font-semibold text-2xl mb-4'>
          Khách hàng đăng ký
        </div>
        <BarChart data={data3} />
      </div>
    </div>
  );
};

export default HomePage;
