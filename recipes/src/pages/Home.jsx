import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <motion.div>
        <Vegetarian />
        <Popular />
      </motion.div>
    </div>
  )
}

export default Home;