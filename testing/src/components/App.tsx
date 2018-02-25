/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

interface AppProps {
  message: string;
}
export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>Hello {message}</h1>
      <Button type="primary">Test</Button>
    </div>
  );
}
