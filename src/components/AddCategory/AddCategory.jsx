import { useState } from "react";
import Input from "../../common/Input/Input";
import Textarea from "../../common/Textarea/Textarea";
import styles from "./addCategory.module.css";
import {useDispatch} from 'react-redux';
import { addCategory } from "../../features/inventorySlice/inventorySlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState(false);
  const [category, setCategory] = useState({ title: "", description: "" });
  const changeHandler = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const addCategoryHandler = ()=>{
    if(category.title === ""){
      alert("Please Enter Your Title");
    }else if(category.desc === ""){
      alert("Please Enter Description For Category");
    }else {
      dispatch(addCategory({title:category.title,description:category.description}));
      const otherCategories = JSON.parse(localStorage.getItem("category"))||[];
      const newCategory = {value:category.title,text:category.title,description:category.description}
      localStorage.setItem("category",JSON.stringify([...otherCategories,newCategory]));
      setCategory({ title: "", description: "" });
      setIsAdd(false);
    }
  }
  const submitHandler = (e)=>{
      e.preventDefault();
  }
  return (
    <section className={`${styles.container}`}>
      <button style={isAdd ? {display:"none"} : {display:"block"}} onClick={()=>setIsAdd(!isAdd)} className="text-secondary bg-transparent border-0 text-start h5 w-50 w-sm-25">
        Add Category?
      </button>
      <h3 style={isAdd ? {display:"block"}:{display:"none"}} className="text-white">Add New Category</h3>
      <form onSubmit={(e)=> submitHandler(e)} className={styles.form} style={isAdd? {display:"flex"} : {display:"none"}}>
        <Input value={category.title} title="title" type="text" onChange={(e) => changeHandler(e)} />
        <Textarea value={category.description} title="description" onChange={(e) => changeHandler(e)} />
        <div className={styles.btnContainer}>
          <button onClick={()=> setIsAdd(false)} className="btn w-50 btn-outline-secondary ">Cancel</button>
          <button onClick={()=> addCategoryHandler()} type="submit" className="btn w-50 btn-secondary">Add Category</button>
        </div>
      </form>
    </section>
  );
};

export default AddCategory;
