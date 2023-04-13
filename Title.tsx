import React from "react";
import { Select } from "antd";
import { Field } from "@formily/react";

interface IProps {
  i: number;
}
export const Title = ({ i }: IProps) => {
  return (
    <Field
      name={[i, "select"]}
      component={[
        Select,
        {
          options: [
            { label: "select1", value: 1 },
            { label: "select2", value: 2 }
          ],
          style: {
            width: 200
          }
        }
      ]}
    />
  );
};
