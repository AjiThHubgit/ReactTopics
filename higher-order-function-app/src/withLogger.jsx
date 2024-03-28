import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
    const WithLogger = (props) => {
        useEffect(() => {
            console.log('Props:', props);
        }, [props]);

        return <WrappedComponent {...props} />;
    };

    return WithLogger;
};

export default withLogger;
