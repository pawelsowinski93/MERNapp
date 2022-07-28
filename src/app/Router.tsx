import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router: React.FC = (): JSX.Element => (
    <Routes>
        <Route path="/" element={<div>hello</div>} />
    </Routes>
);

export default Router;
