import React from 'react';

interface PageProps {
    params: {
        id: string;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    return <div>About, User {params.id}</div>;
};

export default Page;
