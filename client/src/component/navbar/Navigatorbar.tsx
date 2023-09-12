import { useEffect, useState } from "react";
import { Button, Col, Menu, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGO.webp";

const Navigatorbar = () => {
  const navigate = useNavigate();
  return (
    <Row justify={"space-between"} align={"middle"}>
      <Col xs={12} sm={9} lg={13} xl={15} xxl={17} style={{ display: "flex" }}>
        <Link to={"/"}>
          <img
            src={logo}
            alt={"logo"}
            style={{ position: "absolute", top: -20 }}
          />
        </Link>
      </Col>
      <Col
        xs={8}
        sm={12}
        lg={9}
        xl={7}
        xxl={5}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          style={{ width: "100%" }}
          items={[
            {
              key: "1",
              label: "หน้าแรก",
              onClick: () => {
                navigate("/");
              },
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
      </Col>
      <Col xs={5} sm={3} lg={2} xl={2} xxl={2}>
        <Button
          className="login-btn"
          type="primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          เข้าสู่ระบบ
        </Button>
      </Col>
    </Row>
  );
};

export default Navigatorbar;
