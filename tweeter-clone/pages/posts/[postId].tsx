import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from 'next/navigation'
import usePost from "@/hooks/usePost";
// components
import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentFeed from "@/components/posts/CommentFeed";

interface pageProps {}

const PostView: React.FC<pageProps> = ({ }) => {
  const searchParams = useSearchParams()
  const postId = searchParams?.get('postId')
// const PostView = () => {
  // const router = useRouter();
  // const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }
  return ( 
    <>
      <Header showBackArrow label="Tweet" />
      <PostItem data={fetchedPost}  userId={fetchedPost.userId} />
      <Form postId={postId as string} isComment placeholder="Tweet your reply" />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
   );
}
 
export default PostView;