import React from "react";
import { useField, observer, Field } from "@formily/react";
import { ArrayField as ArrayFieldType } from "@formily/core";
import { Button, Row, Col, Select, Input, Space } from "antd";
import { FormItem } from "@formily/antd";

export default observer(() => {
  const field = useField<ArrayFieldType>();
  return (
    <div>
      {field.value?.map((item, i) => {
        return (
          <div key={i}>
            <br />
            <Row gutter={14}>
              <Col span={7}>
                <Field
                  title="aa"
                  decorator={[FormItem]}
                  initialValue={1}
                  name={[i, "aa"]}
                  component={[
                    Select,
                    {
                      options: [
                        { label: "最近一次消耗时间", value: 1 },
                        { label: "是否电商", value: 2 }
                      ],
                      style: { width: "100%" }
                    }
                  ]}
                />
              </Col>
              <Col span={7}>
                <Field
                  title="bb"
                  decorator={[FormItem]}
                  name={[i, "bb"]}
                  initialValue={1}
                  component={[
                    Select,
                    {
                      options: [
                        { label: "等于", value: 1 },
                        { label: "大于", value: 2 }
                      ],
                      style: { width: "100%" }
                    }
                  ]}
                  reactions={(field) => {
                    // if (!field.form.fields[field.address.toString()]) return;

                    const result = field.query(".aa").value();
                    if (result === 2) {
                      field.value = 2;
                      field.setComponentProps({
                        options: [
                          {
                            label: "包含",
                            value: 1
                          },
                          {
                            label: "不包含",
                            value: 2
                          }
                        ]
                      });
                    } else {
                      field.value = 1;
                    }
                  }}
                />
              </Col>
              <Col span={7}>
                <Field
                  title="cc"
                  decorator={[FormItem]}
                  initialValue={1}
                  name={[i, "cc"]}
                  component={[Input]}
                  reactions={(field) => {
                    // if (!field.form.fields[field.address.toString()]) return;
                    // const result2 = field.address.entire
                    // console.log('result2', JSON.stringify(result2))
                    // // field.value = result1

                    const result = field.query(".bb").value();

                    if (result === 1) {
                      field.value = 1;
                      field.setComponent(Select, {
                        options: [{ label: "test", value: 1 }],
                        style: { width: "100%" }
                      });
                    } else {
                      field.setComponent(Input);
                      field.setComponentProps({
                        onChange: () => {
                          // TIP: 模拟请求接口
                          setTimeout(() => {
                            console.log("^^^");
                          }, 1000);
                        }
                      });
                      field.value = 2;
                    }
                  }}
                />
              </Col>
              <Col span={3}>
                <Space>
                  <Button
                    type="link"
                    style={{ padding: 0 }}
                    onClick={() => {
                      field.push({});
                    }}
                  >
                    +
                  </Button>
                  {field.value.length > 1 && (
                    <Button
                      type="link"
                      style={{ padding: 0 }}
                      onClick={() => {
                        field.remove(i);
                      }}
                    >
                      -
                    </Button>
                  )}
                </Space>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
});
