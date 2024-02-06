import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box key={item.id} p="1" style={{ flex: "0 0 auto" }}>
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width):1023px 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
