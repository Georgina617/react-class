import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const [singlePost, setSinglePost] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await axios(`https://dummyjson.com/posts/${id}`);
        // console.log(response.data);
        setSinglePost(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchSinglePost();
  }, [id]);
  return (
    <section className="p-10">
      <article className="px-4 py-4 border-[1px] shadow-lg min-w-[300px] ">
        <header className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1592621385612-4d7129426394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D"
              alt="profile-image"
            />
            <div>
              <p className="font-bold">{singlePost.title}</p>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">
                  {singlePost.views}
                </span>
                <IoSettingsOutline />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BsThreeDots className="text-2xl cursor-pointer" />
            <IoClose className="text-2xl cursor-pointer" />
          </div>
        </header>
        <p className="mt-4">{singlePost.body}</p>
      </article>
    </section>
  );
};

export default SinglePostPage;
