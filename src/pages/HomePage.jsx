import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../components/CustomButton'

export const HomePage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen gap-4'>
            <div className='flex flex-col gap-4'>
                <Link to={'/add-school'}>
                    <CustomButton >
                        Add School
                    </CustomButton>
                </Link>
                <Link to={'/show-schools'}>
                    <CustomButton>
                        Show Schools
                    </CustomButton>
                </Link>
            </div>
        </div>
    )
}
