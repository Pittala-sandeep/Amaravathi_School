import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NoticeEditDelete = ({ notice, setData }) => {
  const navigate = useNavigate();

  const handleEdit = async (id) => {
    const selectedNotice = notice
    navigate(`/notice/edit/${id}`, { state: { noticeData: selectedNotice } })
  }


  const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/notice/delete/${id}`, {
            withCredentials: true, 
            });
            setData((prevData) => prevData.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

  return (  
      <div className="flex justify-end mt-4 space-x-4">
        {/* Edit Button */}
        <button
          className="text-blue-600 hover:text-blue-800 transition"
          data-tooltip-id={`edit-${notice._id}`}
          onClick={() => handleEdit(notice._id)}
        >
          <FaEdit size={18} />
        </button>
        <Tooltip id={`edit-${notice._id}`} content="Edit" />

        {/* Delete Button */}
        <button
          className="text-red-600 hover:text-red-800 transition"
          data-tooltip-id={`delete-${notice._id}`}
          onClick={() => handleDelete(notice._id)}
        >
          <FaTrash size={18} />
        </button>
        <Tooltip id={`delete-${notice._id}`} content="Delete" />
      </div>
  );
};
