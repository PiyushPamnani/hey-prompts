"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const UserProfile = () => {
  const [promptsData, setPromptsData] = useState([]);
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${promptId}/posts`);
      const data = await response.json();

      setPromptsData(data);
    };

    if (promptId) fetchPost();
  }, []);

  return (
    <Profile
      name={promptsData[0]?.creator.username}
      desc={`Welcome to ${promptsData[0]?.creator.username} personalized profile page. Find all the inspiring prompts created by ${promptsData[0]?.creator.username}.`}
      data={promptsData}
    />
  );
};

export default UserProfile;
