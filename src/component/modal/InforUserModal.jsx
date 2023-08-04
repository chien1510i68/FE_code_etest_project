import { Button, Col, Form, Input, Modal, Row, Space } from "antd";
import React from "react";
const InforUserModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [form] = Form.useForm();
  

  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(
          () => {
            setSubmittable(true);
          },
          () => {
            setSubmittable(false);
          }
        );
    }, [values]);
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        Submit
      </Button>
    );
  };
  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        onOk={false}
        onCancel={handleCancel}
        className="text-center max-w-[50]"
        destroyOnClose
        width={600}
      >
        <Row className="w-full">
          <Col span={8} className="">
            <div className="w-[50rem] h-[50rem]">
              <img
                src="/Frame 1.png"
                alt=""
                className="rounded-[50%] w-full h-full "
              />
            </div>
          </Col>
          <Col span={2}></Col>
          <Col span={14} className="mt-auto mb-[30px]">
            <Row gutter={20}>
              <Col span={12}>
                <Button className="bg-[#FB9400] hover:opacity-[.8] hover:text-[#fff]">
                  Tải ảnh đại diện mới
                </Button>
              </Col>
              <Col span={12}>
                <Button className="bg-[#FB9400] hover:opacity-[.8] hover:text-[#fff]">
                  Đổi mật khẩu
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              label="Họ và tên"
              rules={[
                {
                  required: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              name="date"
              label="Ngày sinh"
              rules={[
                {
                  required: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Nhập ngày sinh" />
            </Form.Item>

            <Form.Item
              name="phonenumber"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              name="addr"
              label="Địa chỉ"
              rules={[
                {
                  required: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Form>
        </> */}

        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            name="date"
            label="Ngày sinh"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Nhập ngày sinh" />
          </Form.Item>

          <Form.Item
            name="phonenumber"
            label="Số điện thoại"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            name="addr"
            label="Địa chỉ"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form} />
              {/* <Button htmlType="reset">Reset</Button> */}
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default InforUserModal;
