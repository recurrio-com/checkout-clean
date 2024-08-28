import React from 'react'
import BarLoader from 'react-spinners/BarLoader';

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div>
            <BarLoader
                color={'#7700ff'}
                loading={isLoading}
                width={'100%'}
                height={5}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader
