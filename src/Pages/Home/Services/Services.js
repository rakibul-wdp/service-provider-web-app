import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useServices();
  return (
    <div id='services'>
      <h2 className='text-center mt-5 mb-3 text-primary'>My Services</h2>
      <div className='services-container'>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
