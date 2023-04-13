import React from "react";
import { ArrayField, useField, observer } from "@formily/react";
import { ArrayField as ArrayFieldType } from "@formily/core";
import { Button, Card, Divider } from "antd";
import { Child } from "./Child";
import PlusOutlined from "./PlusOutLined";

export const ArrayComponent = observer(() => {
  const field = useField<ArrayFieldType>();
  return (
    <>
      <div>
        {field.value?.map((item, index) => {
          return (
            <div key={index}>
              <br />
              <Card
                title={`标签组规则${index + 1}`}
                extra={
                  <Button
                    onClick={() => {
                      field.remove(index);
                    }}
                  >
                    删除
                  </Button>
                }
              >
                <div style={{ display: "flex-block" }}>
                  <ArrayField name={index} component={[Child]} />
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <Divider dashed style={{ color: "#ccc" }}>
          <PlusOutlined />
          <Button
            type="link"
            onClick={() => {
              field.push([]);
            }}
          >
            添加标签规则组
          </Button>
        </Divider>
      </div>
    </>
  );
});
