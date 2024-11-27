import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
const MainHouse = () => {
  return (
    <>
      <motion.div
       variants={fadeIn('up', 0.6)}
       initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
       className='text-center'>
        <h2 className='text-6xl font-bold text-primary'>Most Viewed</h2>
        <br/>
        <span className='text-xl text-gray-600'>Discover a range of vacation homes worldwide. <br/> Book securely and get expert customer support for a stress-free stay</span>
      </motion.div>
    </>
  );
}

export default MainHouse;
