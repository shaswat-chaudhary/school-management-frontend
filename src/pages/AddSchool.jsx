import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../components/InputField';
import { CustomButton } from '../components/CustomButton';
import axios from 'axios';

export const AddSchool = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post("https://school-management-backend-production-7b68.up.railway.app/api/school", data);
            alert("School added successfully");
            reset();
        } catch (error) {
            console.error(error);
            alert("Failed to add school");
        }
    }
    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold text-center text-gray-100 mb-6'>Add School Detail</h1>

                </div>

                <div className='bg-gray-100 p-6 rounded-2xl shadow-lg'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <InputField
                            label="School Name"
                            placeholder="School Name"
                            register={register("name", { required: "School name is required" })}
                            error={errors.schoolName?.message}
                        />
                        <InputField
                            label="Address"
                            placeholder="Address"
                            register={register("address", { required: "Address is required" })}
                            error={errors.address?.message}
                        />
                        <InputField
                            label="City"
                            placeholder="Enter City Name"
                            register={register("city", { required: "City is required" })}
                            error={errors.city?.message}
                        />
                        <InputField
                            label="State"
                            placeholder="Enter State Name"
                            register={register("state", { required: "State is required" })}
                            error={errors.state?.message}
                        />
                        <InputField
                            label="Contact Number"
                            placeholder="Enter Mobile Number"
                            register={register("contact", {
                                required: "Contact number is required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter a valid 10-digit mobile number",
                                },
                            })}
                            error={errors.contact?.message}
                        />
                        <InputField
                            label="image"
                            placeholder='Enter Image Url'
                            register={register("image", { required: "Image is required" })}
                            error={errors.image?.message}
                        />
                        <InputField
                            label="Email"
                            placeholder="Enter School Email"
                            type="email"
                            register={register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email address",
                                },
                            })}
                            error={errors.email?.message}
                        />
                        <CustomButton type="submit" className='mt-4 w-full'>
                            Submit
                        </CustomButton>
                    </form>
                </div>
            </div>
        </div>
    )
}
