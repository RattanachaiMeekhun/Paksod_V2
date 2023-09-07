import { Button, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.webp";

type Props = {};

const Navigatorbar = () => {
  return (
    <>
      <Link to="/" onClick={() => {}}>
        <img src={logo} className="logo" alt={"logo"} />
      </Link>
      <div className="nav-group">
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          style={{ minWidth: 373 }}
          items={[
            {
              key: "1",
              label: "หน้าแรก",
            },
            {
              key: "2",
              label: "สินค้า",
            },
            {
              key: "3",
              label: "ปฏิทินผลผลิต",
            },
            {
              key: "4",
              label: "ระบบตรวจสอบ",
            },
          ]}
        />
        <Button type="primary">เข้าสู่ระบบ</Button>
      </div>
    </>
  );
};

export default Navigatorbar;
