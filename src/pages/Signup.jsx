import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function SignupPage() {
  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    address: '',
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

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = 'This field is required'
      }
    })

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Form submitted:', { ...formData, userType })
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Create a new account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-gray-700">I am a:</label>
            <div className="flex items-center space-x-2 bg-gray-200 p-1 rounded-full">
              <span
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  userType === 'customer' ? 'bg-blue-500 text-white' : 'text-gray-700'
                }`}
                onClick={() => setUserType('customer')}
              >
                Customer
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={userType === 'mechanic'}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  userType === 'mechanic' ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                onClick={() => setUserType(userType === 'customer' ? 'mechanic' : 'customer')}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    userType === 'mechanic' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  userType === 'mechanic' ? 'bg-blue-500 text-white' : 'text-gray-700'
                }`}
                onClick={() => setUserType('mechanic')}
              >
                Mechanic
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
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

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.phone_number}
              onChange={handleInputChange}
            />
            {errors.phone_number && <p className="mt-1 text-xs text-red-500">{errors.phone_number}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}