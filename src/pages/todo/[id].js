import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Todo = ({ data }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  if (!data) {
    return <>loading...</>;
  }

  return (
    <div>
      Todo - {data?.title}
      <br />
      <br />
      <Link href="/todo/[id]" as="/todo/1">
        <a>TODO 1 </a>
      </Link>
      <br />
      <Link href="/todo/[id]" as="/todo/2">
        <a>TODO 2 </a>
      </Link>
      <br />
      <Link href="/todo/[id]" as="/todo/3">
        <a>TODO 3 </a>
      </Link>
      <br />
      <br />
      <button onClick={handleClick}>Voltar</button>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;

  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};

export default Todo;
