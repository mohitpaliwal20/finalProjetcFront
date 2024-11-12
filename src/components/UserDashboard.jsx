import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaUser, FaEdit, FaStar, FaRegStar } from 'react-icons/fa';

function UserProfile() {
  const [userData, setUserData] = useState({
    username: 'Priya Sharma',
    email: 'johndoe@example.com',
    password: '********',
    address: 'New York, USA',
    phone: '+9195567890',
  });

  const [servicesVisible, setServicesVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  const [serviceReviews, setServiceReviews] = useState([
    { service: 'Oil Change', rating: 0, review: '' },
    { service: 'Brake Repair', rating: 0, review: '' },
    { service: 'Battery Replacement', rating: 0, review: '' },
  ]);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
  };

  const toggleServices = () => {
    setServicesVisible(!servicesVisible);
  };

  const handleReviewChange = (index, e) => {
    const { name, value } = e.target;
    const updatedReviews = [...serviceReviews];
    updatedReviews[index][name] = value;
    setServiceReviews(updatedReviews);
  };

  const handleRatingChange = (index, rating) => {
    const updatedReviews = [...serviceReviews];
    updatedReviews[index].rating = rating;
    setServiceReviews(updatedReviews);
  };

  // Simulated service data
  const services = [
    { service: 'Oil Change', date: '2024-11-01' },
    { service: 'Brake Repair', date: '2024-10-15' },
    { service: 'Battery Replacement', date: '2024-09-20' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="flex flex-col w-2/3 max-w-9xl p-2 bg-gray-50 rounded-2xl shadow-2xl border border-gray-200">
        {/* Profile Header */}
        <div className="flex items-center space-x-5 p-4 bg-gray-100">
          {/* Left Side - Profile Icon */}
          <div className="flex flex-col items-center p-3 w-2/3">
            <h2 className="text-3xl font-bold text-gray-800">User Profile</h2>
            <br></br>
            <br></br>
            <FaUser
  className="text-5xl text-gray-600 "
/>
<br></br>
            <button
              onClick={handleEditProfile}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-800 flex items-center space-x-2"
            >
              <FaEdit className="text-white" />
              <span>Edit Profile</span>
            </button>
          </div>

          {/* Right Side - Profile Information */}
          <div className="w-2/3 space-y-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {isEditing ? (
              <>
                {['username', 'email', 'password', 'address', 'phone'].map((field) => (
                  <div key={field} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <label className="text-gray-500 font-medium">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={editData[field]}
                        onChange={handleChange}
                        className="text-gray-800 text-lg border border-gray-300 rounded-md p-2 mt-1 w-full"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleSave}
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                {['username', 'email', 'password', 'address', 'phone'].map((field) => (
                  <div key={field} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <label className="text-gray-500 font-medium">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <div className="text-gray-800 text-lg">{userData[field]}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Services Section */}
        <div className="w-[90%] max-w-5xl mt-7 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div onClick={toggleServices} className="flex items-center justify-between cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-700">Services Provided</h3>
            {servicesVisible ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {servicesVisible && (
            <div className="mt-4 text-gray-600 space-y-2">
              {services.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
                  <div>
                    <p className="font-medium">{item.service}</p>
                    <p className="text-sm text-gray-500">Date: {item.date}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <label className="text-sm text-gray-500">Rate Service</label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => handleRatingChange(index, star)}
                          className="cursor-pointer"
                        >
                          {serviceReviews[index].rating >= star ? (
                            <FaStar className="text-yellow-400" />
                          ) : (
                            <FaRegStar className="text-yellow-400" />
                          )}
                        </span>
                      ))}
                    </div>
                    <label className="text-sm text-gray-500 mt-2">Write Review</label>
                    <textarea
                      name="review"
                      placeholder="Write your review"
                      value={serviceReviews[index].review}
                      onChange={(e) => handleReviewChange(index, e)}
                      className="mt-1 text-gray-800 text-sm border border-gray-300 rounded-md p-1 w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;