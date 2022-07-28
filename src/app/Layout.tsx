import React from 'react';

const Layout: React.FC<{
    children: React.ReactNode;
}> = ({ children }): JSX.Element => <div>{children}</div>;

export default Layout;
