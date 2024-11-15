import Image from "next/image";
import React from "react";

function HeaderImage() {
  return (
    <Image
      alt="banner"
      src={
        "https://s3-alpha-sig.figma.com/img/b191/73d7/f48a4e1896e3d163f7cb2b16b5ad8927?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fz2bCaHVj8fqlSboL~W-faMzZqUlohzoyT78517V-GesHpY1AXsqgh5v2vw5TumnowhODbFTZ039v2XdMSssHM8tODrbocww~dDk7~0Ieqy76rEBvY21M65ksfhM4hShnwKhFsAZ3KQE97hb5mQc59Fh70EpOzxzWy7J6f9NlAAsJ84E0DaitdjbbQnNwLg6RqZVn1sTElRs7EyQ6CajFhZ~84NBHMigqBjUlfZ5IZAG2iPkGkuXS~Ytk3RDrL8VutRQIWoQJtFsZDMb9dbEfUli7r~uRBRxkDersHvtZwYTqtuAwXU4UVGhiM51wNEARUQfkha2s--MU8KZBOCW4w__"
      }
      width={1000}
      height={1000}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  );
}

export default HeaderImage;
