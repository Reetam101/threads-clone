import { VStack } from "@chakra-ui/react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about threads"
      />
      <UserPost
        likes={100}
        replies={501}
        postImg="/post2.png"
        postTitle="Nice tutorial"
      />
      <UserPost
        likes={2000}
        replies={121}
        postImg="/post3.png"
        postTitle="Good guy"
      />
      <UserPost likes={1400} replies={301} postTitle="First post" />
    </>
  );
};

export default UserPage;
