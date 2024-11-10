import { toast } from "react-hot-toast"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp, sendOtp } from '../../../services/operations/authAPI'
import { setSignupData } from "../../../slices/authSlice"

export default function SignupPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    state: '',
    city: '',
    pincode: '',
    address: '',
    storeName: '', 
    mechanicImage: '', 
    storeAddress: '', 
    aadhar: '', 
    servicesProvided: '', 
    userType
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    dispatch(setSignupData(formData))
    dispatch(sendOtp(formData.email, navigate))
  }

  const handleUserTypeChange = (type) => {
    setUserType(type)
    setFormData((prev) => ({ ...prev, userType: type }))
  }
  

  return (
    <>
      <div className="min-h-screen flex bg-gray-100 w-[1000px] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl w-full font-extrabold text-gray-900">Sign Up</h2>
            <p className="mt-2 text-center text-sm text-gray-600 w-full">Create a new account</p>
          </div>
          <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-2">
              <label className="text-sm font-medium text-gray-700">I am a:</label>
              <div className="flex items-center space-x-2 bg-gray-200 p-1 rounded-full">
                <span
                  className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${userType === 'customer' ? 'bg-slate-500 text-white' : 'text-gray-700'}`}
                  onClick={() => handleUserTypeChange('customer')}
                >
                  Customer
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={userType === 'mechanic'}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 ${userType === 'mechanic' ? 'bg-slate-600' : 'bg-gray-200'}`}
                  onClick={() => handleUserTypeChange(userType === 'customer' ? 'mechanic' : 'customer')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${userType === 'mechanic' ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
                <span
                  className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${userType === 'mechanic' ? 'bg-slate-500 text-white' : 'text-gray-700'}`}
                  onClick={() => handleUserTypeChange('mechanic')}
                >
                  Mechanic
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Name Fields */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Contact Details */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                />
              </div>
              <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>
              {/* Address Fields */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {userType === 'mechanic' && (
              <>
                <div>
                  <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
                  <input
                    id="storeName"
                    name="storeName"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={formData.storeName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700">Store Address</label>
                  <textarea
                    id="storeAddress"
                    name="storeAddress"
                    required
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={formData.storeAddress}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Services Provided Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Services Provided</label>
                  <div className="flex space-x-4 mt-1">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="servicesProvided"
                        value="twoWheeler"
                        checked={formData.servicesProvided === 'twoWheeler'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Two-Wheeler
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="servicesProvided"
                        value="fourWheeler"
                        checked={formData.servicesProvided === 'fourWheeler'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Four-Wheeler
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="servicesProvided"
                        value="both"
                        checked={formData.servicesProvided === 'both'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Both
                    </label>
                  </div>
                </div>
              </>
            )}

            <div>
              <center>
                <button
                  type="submit"
                  className="w-800 bg-black text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
