import { useState } from "react";

// 07. Activity _ Create LikeButton
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
    // console.log("Clicked");
  };
  let styles = {
    color: "red",
  };

  return (
    <div>
      <p>count = {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
