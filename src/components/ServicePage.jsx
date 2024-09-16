import React from 'react';
import ServiceDetail from './ServiceDetail';
import './ServicePage.css';

const ServicePage = () => {
  return (
    <div className="service-page">
      <h1 className="service-page-heading">Anywhere Mechanic Services</h1>
      <ServiceDetail 
        title="On-Site Vehicle Repair"
        description="Our expert mechanics will come to your location to perform repairs on-site, whether you are at home, work, or even stranded on the road. No need to visit a garage!"
      />
      <ServiceDetail 
        title="Scheduled Maintenance"
        description="Book regular maintenance services like oil changes, tire rotations, and more. We'll bring all the necessary tools and parts to your preferred location."
      />
      <ServiceDetail 
        title="Emergency Assistance"
        description="Breakdowns happen when you least expect it. Our mechanics are available for emergency assistance to get you back on the road quickly."
      />
    </div>
  );
};

export default ServicePage;
