import * as React from 'react';

export interface AppProps {
    message: string,
};
export default function(props: AppProps ) {
    return <h1>Hello {props.message}</h1>;
};