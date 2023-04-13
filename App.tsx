import React from "react";
import { createForm, onFormValuesChange } from "@formily/core";
import { FormProvider, ArrayField } from "@formily/react";
import { ArrayComponent } from "./ArrayComponent";
const form = createForm({
  initialValues: {
    array: [
      [
        {
          select: 1,
          list: [{ aa: 1, bb: 1, cc: 111 }],
          list2: [{ aaa: 2, bbb: 2, ccc: 222 }]
        }
      ]
    ]
  },
  effects() {
    onFormValuesChange((form) => {
      console.log(JSON.parse(JSON.stringify(form.values)));
    });
  }
});

export default () => (
  <>
    <FormProvider form={form}>
      <ArrayField name="array" component={[ArrayComponent]} />
    </FormProvider>
    <br />
    <ol>
      <dt>联动事例描述</dt>
      <li>通过切换 select 联动整体显隐</li>
      <li>aa 变换联动 bb 值、select options 变换</li>
      <li>bb 变换联动 cc 值、组件 变换</li>
      <li>cc 值变化时与服务端通信</li>
    </ol>
    <br />
    <ol>
      <dt>关键方法</dt>
      <li>Field: 简单类型字段(string|number|bool)</li>
      <li>ArrayField: 数组型字段</li>
      <li>observer: 包装组件为响应式的方法</li>
    </ol>
    <br />
    <ol>
      <dt>联动写法</dt>
      <li>
        事例中使用 Field 的
        reactions，配合路径查找系统。优点是字段级别，直接使用字段相对路径，容易写
      </li>
      <li>
        effects 中写法，通过 onFieldReact、onFieldValueChange
        等实现，优点是同一位置统一管理，一目了然，便于后续维护
      </li>
      <li>
        schema 中写法，纯配置化写法。优点是 js
        逻辑抽象成可配置字符串，便于数据流转、配置使用
      </li>
    </ol>
    <br />
    <ol>
      <dt>层级发展</dt>
      <li>目前实现了 3 层，使用两次 ArrayField 嵌套</li>
      <li>n 层即 n - 1 次 ArrayField 嵌套</li>
    </ol>
  </>
);
