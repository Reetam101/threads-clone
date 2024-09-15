import { VStack } from "@chakra-ui/react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useInView, useTransform, useViewportScroll } from "framer-motion";
import { motion } from "framer-motion";
const UserPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.7, 1]);

  return (
    <>
      <UserHeader />
      <motion.div style={{ scale: scale }}>
        {/* <motion.div> */}
        <UserPost
          likes={1200}
          replies={481}
          postImg="/post1.png"
          postTitle="Let's talk about threads"
        />
        {/* </motion.div> */}
      </motion.div>
      <motion.div style={{ scale: scale }}>
        <UserPost
          likes={100}
          replies={501}
          postImg="/post2.png"
          postTitle="Nice tutorial"
        />
      </motion.div>
      <motion.div style={{ scale: scale }}>
        <UserPost
          likes={2000}
          replies={121}
          postImg="/post3.png"
          postTitle="Good guy"
        />
      </motion.div>
      <motion.div style={{ scale: scale }}>
        <UserPost likes={1400} replies={301} postTitle="First post" />
      </motion.div>
    </>
  );
};

export default UserPage;
