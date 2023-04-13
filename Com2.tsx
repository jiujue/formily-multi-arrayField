import React from "react";
import { useField, observer, Field } from "@formily/react";
import { ArrayField as ArrayFieldType } from "@formily/core";
import { Button, Row, Col, Select, Input } from "antd";
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
                  name={[i, "aaa"]}
                  title="aaa"
                  decorator={[FormItem]}
                  initialValue={1}
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
                  name={[i, "bbb"]}
                  title="bbb"
                  decorator={[FormItem]}
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
                    const result = field.query(".aaa").value();
                    if (result === 2) {
                      field.value = "";
                    } else {
                      field.value = 1;
                    }
                  }}
                />
              </Col>
              <Col span={7}>
                <Field
                  name={[i, "ccc"]}
                  title="ccc"
                  initialValue={1}
                  decorator={[FormItem]}
                  component={[Input]}
                  reactions={(field) => {
                    // const result2 = field.address.entire
                    // console.log('result2', JSON.stringify(result2))
                    // // field.value = result1
                    // if (!field.form.fields[field.address.toString()]) return;

                    const result = field.query(".bbb").value();

                    if (result === 1) {
                      field.value = 1;
                      field.setComponent(Select, {
                        options: [{ label: "test", value: 1 }],
                        style: { width: "100%" }
                      });
                    } else {
                      field.setComponent(Input);
                      field.value = 2;
                    }
                  }}
                />
              </Col>
              <Col span={3}>
                <Button
                  type="link"
                  onClick={() => {
                    field.push({});
                  }}
                >
                  +
                </Button>
                {field.value.length > 1 && (
                  <Button
                    type="link"
                    onClick={() => {
                      field.remove(i);
                    }}
                  >
                    -
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
});
