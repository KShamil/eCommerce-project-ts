import { useEffect } from 'react'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container mt-5'>Services</div>
  )
}

export default Services;