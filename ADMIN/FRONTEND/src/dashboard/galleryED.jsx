import React from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

export const GalleryEditDelete = ({ item, setData }) => {
    const navigate = useNavigate();
    const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;
    
    const handleEdit = async (id) => {
        const selectedItem = item
        navigate(`/gallery/edit/${id}`, { state: { galleryData: selectedItem } })
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${ADMIN_ORIGIN}/gallery/${id}`, {
            withCredentials: true, 
            });
            setData((prevData) => prevData.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

  return (   
    <div className="flex justify-end m-4 space-x-4">
        {/* Edit Button */}
        <button
            className="text-blue-600 hover:text-blue-800 transition"
            data-tooltip-id={`edit-${item._id}`}
            onClick={() => handleEdit(item._id)}
        >
            <FaEdit size={18} />
        </button>
        <Tooltip id={`edit-${item._id}`} content="Edit" />

        {/* Delete Button */}
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
