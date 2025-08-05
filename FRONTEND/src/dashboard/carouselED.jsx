import axios from "axios";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const CarouselEditDelete = ({ item, setData }) => {

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/carousel/${id}`, {
            withCredentials: true, 
            });
            setData((prevData) => prevData.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

  return (  
      <div className="flex justify-end m-4 space-x-4">
        <button
          className="text-red-600 hover:text-red-800 transition"
          data-tooltip-id={`delete-${item._id}`}
          onClick={() => handleDelete(item._id)}
        >
          <FaTrash size={18} />
        </button>
        <Tooltip id={`delete-${item._id}`} content="Delete" />
      </div>
  );
};
