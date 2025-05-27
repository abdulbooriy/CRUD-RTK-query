import { memo } from "react";
import {
  useDeleteStudentsMutation,
  useGetStudentsQuery,
} from "../../redux/api/students.api";
import type { IStudents } from "../../shared/types";
import { TbEdit } from "react-icons/tb";
import { Card } from "antd";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import toast from "react-hot-toast";
import { Flex, Spin } from "antd";

const { Meta } = Card;

const Home = () => {
  const { data, isLoading } = useGetStudentsQuery({});
  const [deleteStudents] = useDeleteStudentsMutation();

  const handleDelete = (id: string) => {
    try {
      if (confirm("Are you sure you want to delete this Student ?")) {
        deleteStudents(id);
        toast.success("Student is successfully deleted !");
      }
    } catch (error) {
      toast.error("Something went wrong from deleting Student !");
    }
  };

  const handleEdit = () => {
    alert("Hozircha Edit ishlamayapti 😐");
  };

  return (
    <section>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <Flex align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        </div>
      )}
      <div className="container mx-auto flex flex-wrap justify-center gap-7 py-20">
        {data?.map((student: IStudents) => (
          <div key={student?.id}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={
                <img
                  className="h-[250px]"
                  alt={student?.userName}
                  src={student?.image}
                />
              }>
              <Meta
                title={
                  <div className="flex items-center gap-1.5 text-[20px] font-[Inter]">
                    <h3>{student?.firstName}</h3>
                    <h3>{student?.lastName}</h3>
                  </div>
                }
                description={
                  <div className="flex flex-col gap-1.5 text-black pt-5">
                    <div className="flex items-center gap-2.5">
                      <FaUserCircle className="text-2xl" />
                      <h3 className="text-lg font-[Inter]">
                        {student?.userName}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2.5 font-[Inter] text-[18px]">
                      <FaPhoneAlt />
                      <p>{student?.phoneNumber}</p>
                    </div>
                    <div className="flex items-center gap-2.5 font-[Inter]">
                      <MdOutlinePassword className="text-2xl" />
                      <p className="text-[18px]">{student?.password}</p>
                    </div>
                  </div>
                }
              />
              <div className="flex justify-between items-center border-t border-gray-300 mt-5 pt-5">
                <TbEdit
                  onClick={() => handleEdit()}
                  className="text-4xl text-gray-500 cursor-pointer hover:text-blue-500"
                />
                <LuTrash2
                  onClick={() => handleDelete(student.id)}
                  className="text-3xl text-red-500 cursor-pointer hover:text-red-700"
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Home);
