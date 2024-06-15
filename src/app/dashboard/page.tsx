'use client';
import React, { useEffect } from 'react';
import { getSession } from '../../../utils/getSession';
import { useRouter } from 'next/navigation';
import PrivateRoute from '@/HOC/PrivateRoute';
import DashboardComponent from '@/components/dashboard';

const Dashboard = () => {
  return <DashboardComponent />;
};

export default PrivateRoute(Dashboard);
