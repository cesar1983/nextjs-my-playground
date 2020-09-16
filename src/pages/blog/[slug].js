import { useRouter } from "next/router";
import posts from "../../posts.json";

const Post = ({ post }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/blog");
  };

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <br />
      <button onClick={handleClick}>Voltar</button>
    </>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.slug],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "test" } }, { params: { slug: "second" } }],
    fallback: false,
  };
}

export default Post;
