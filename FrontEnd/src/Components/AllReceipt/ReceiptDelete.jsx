import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../pages/Login";
import toast, { Toaster } from "react-hot-toast";

export const ReceiptDelete = () => {
  let { id } = useParams();
  let navigate=useNavigate()
  useEffect(() => {
    async function load() {
      let { data } = await axios.delete(`${endpoint + "/receipt"}/${id}`);
      if (data.status === "Success") {
        toast.success(data.message);
       setTimeout(() => {
        navigate('/receipt')
       }, 3000);
      }
    }
    load();
  });
  return (
    <div>
     <Toaster/>
    </div>
  );
};
