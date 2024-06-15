import React, { PropsWithChildren } from 'react';
import { getSession } from '../../utils/getSession';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

type Props = {};

const PrivateRoute = (Component: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const user = getSession();
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/');
    }
    return <Component {...props} />;
  };
  return Wrapper;
};

export default PrivateRoute;
