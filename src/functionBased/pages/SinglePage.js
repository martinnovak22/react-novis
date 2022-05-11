import React from "react";
import { useParams } from "react-router-dom";
const SinglePage = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser localstorage. So whether you reload, close your app or reopen edit, you still have access to your to-do site.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "This app was developed by MN, a self-taught web developer and a technical writer. He is opened to freelanceGig. So go ahead and connect with React on Twitter.",
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  console.log(useParams());
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
