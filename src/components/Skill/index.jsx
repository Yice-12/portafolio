import { Flex, Progress } from "antd";
import React from "react";

export const Skill = ({ tecnology }) => {
  return (
    <div>
      <Flex align="center" wrap gap="small" vertical>
        <img width={100} src={tecnology.icon} />
        <h3>{tecnology.name}</h3>
      </Flex>
    </div>
  );
};
