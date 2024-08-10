import { Button, DatePickerProps, DatePicker } from "antd";
import React from "react";

type AntdProps = {};
function Antd(props: AntdProps) {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <DatePicker onChange={onChange}></DatePicker>
    </div>
  );
}

export default Antd;
