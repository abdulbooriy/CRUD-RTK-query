import { memo, useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Form, Input, Typography } from "antd";
import type { IStudents } from "../../shared/types";
import { useCreateStudentsMutation } from "../../redux/api/students.api";
import toast from "react-hot-toast";

const { Title } = Typography;

const initialState: IStudents = {
  id: "",
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  phoneNumber: "",
  image: "https://avatars.githubusercontent.com/u/97042091",
};

const Students = () => {
  const [formData, setFormData] = useState<IStudents>(initialState);

  const [createNewStudents] = useCreateStudentsMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, userName, password, phoneNumber } = formData;

    if (!firstName || !lastName || !userName || !password || !phoneNumber) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const newStudents = {
      ...formData,
      id: String(new Date().getTime()),
    };

    createNewStudents(newStudents);
    toast.success("Student is successfully created !");
    setFormData(initialState);
  };

  return (
    <section className="flex flex-col items-center pt-10">
      <div className="max-w-[550px] w-full border border-gray-400 rounded-lg p-4">
        <Title className="text-center pb-5" level={3}>
          Create Students
        </Title>

        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onSubmitCapture={handleSubmit}>
          <Form.Item
            label="FirstName"
            htmlFor="FirstName"
            name="firstName"
            rules={[{ required: true, message: "Please input firstName!" }]}>
            <Input
              className="text-black h-12"
              placeholder="Enter firstName"
              name="firstName"
              type="text"
              id="FirstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="LastName"
            htmlFor="LastName"
            name="lastName"
            rules={[{ required: true, message: "Please input lastName!" }]}>
            <Input
              className="text-black h-12"
              placeholder="Enter lastName"
              name="lastName"
              type="text"
              id="LastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="UserName"
            htmlFor="UserName"
            name="userName"
            rules={[{ required: true, message: "Please input userName!" }]}>
            <Input
              className="text-black h-12"
              placeholder="Enter userName"
              name="userName"
              type="text"
              id="UserName"
              value={formData.userName}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            htmlFor="Password"
            name="password"
            rules={[{ required: true, message: "Please input password!" }]}>
            <Input.Password
              className="text-black h-12"
              placeholder="Enter password"
              name="password"
              type="password"
              id="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="PhoneNumber"
            htmlFor="PhoneNumber"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input phoneNumber!" }]}>
            <Input
              className="text-black h-12"
              placeholder="Enter phoneNumber"
              name="phoneNumber"
              type="text"
              id="PhoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
              style={{
                height: "50px",
                fontFamily: "sans-serif",
                fontWeight: "bolder",
              }}>
              + Add a new Country
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default memo(Students);
