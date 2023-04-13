import React from "react";
import { ArrayField, useField, observer } from "@formily/react";
import { ArrayField as ArrayFieldType } from "@formily/core";
import { Button, Card } from "antd";
import { Title } from "./Title";
import Com1 from "./Com1";
import Com2 from "./Com2";
import PlusOutlined from "./PlusOutLined";

export const Child = observer(() => {
  const field = useField<ArrayFieldType>();

  return (
    <div>
      {field.value?.map((item, i) => {
        return (
          <div key={i}>
            <br />
            <Card
              title={<Title i={i} />}
              extra={
                <Button
                  onClick={() => {
                    console.log(
                      `%c i %c ${typeof i} %c`,
                      "background:#3c8cff ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
                      "background:#78e6dc ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
                      "background:transparent",
                      i
                    );
                    field.remove(i);
                  }}
                >
                  删除
                </Button>
              }
            >
              <ArrayField
                name={[i, "list"]}
                component={[Com1]}
                reactions={(field) => {
                  const result = field.query(".select").value();

                  if (result === 1) {
                    field.display = "visible";
                  } else {
                    field.display = "none";
                  }
                  console.log("---");
                  console.log(result);
                  console.log("---");
                }}
              />
              <ArrayField
                name={[i, "list2"]}
                component={[Com2]}
                reactions={(field) => {
                  const result = field.query(".select").value();

                  if (result === 2) {
                    field.display = "visible";
                  } else {
                    field.display = "none";
                  }
                }}
              />
            </Card>
          </div>
        );
      })}
      <div>
        <Button
          type="link"
          onClick={() => {
            field.push({
              select: 1,
              list: [
                // { aa: 1, bb: 1, cc: 111 }
                {}
              ],
              list2: [
                // { aaa: 2, bbb: 2, ccc: 222 }
                {}
              ]
            });
          }}
        >
          <PlusOutlined />
          添加业务域
        </Button>
      </div>
    </div>
  );
});
