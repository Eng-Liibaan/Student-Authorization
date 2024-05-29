import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../pages/Login";
import toast, { Toaster } from "react-hot-toast";

export const ClassDelete = () => {
  let { id } = useParams();
  let navigate=useNavigate()
  useEffect(() => {
    async function load() {
      let {data}=await axios.delete(`${endpoint+'/class'}/${id}`)
      if(data.status==="Success"){
        toast.success(data.message)
        setTimeout(() => {
          navigate("/class")
        }, 3000);
      }
    }
    load();
  });
  return <div><Toaster/></div>;
};
