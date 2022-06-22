import { useState } from "react";
import Input from "../../common/Input/Input";
import Select from "../../common/Select/Select";
import styles from "./inventoryForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/inventorySlice/inventorySlice";

const InventoryForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.inventory);

  const [details, setDetails] = useState({
    title: "",
    quantity: 0,
    category: "none",
  });

  const onChangeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.title === "") {
      alert("Please Enter Title");
    } else if (Number(details.quantity) === 0) {
      alert("Please Set Quantity");
    } else if (details.category === "none") {
      alert("Please Select Category");
    } else {
      dispatch(
        addItem({
          name: details.title,
          quantity: Number(details.quantity),
          category: details.category,
          date: Date.now(),
        })
      );
      const otherItems = JSON.parse(localStorage.getItem("items")) || [];
      localStorage.setItem(
        "items",
        JSON.stringify([...otherItems,{
          name: details.title,
          quantity: Number(details.quantity),
          category: details.category,
          date: Date.now(),
        }])
      );
      setDetails({
        title: "",
        quantity: 0,
        category: "none",
      });
    }
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.container}>
      <Input
        onChange={(e) => onChangeHandler(e)}
        value={details.title}
        title="title"
        type="text"
      />
      <Input
        value={details.quantity}
        onChange={(e) => onChangeHandler(e)}
        title="quantity"
        type="number"
        minimum={0}
        maximum={100}
      />
      <Select
        value={details.category}
        onChange={(e) => onChangeHandler(e)}
        title="category"
        options={categories}
      />
      <button type="submit" className="btn btn-secondary">
        Add New Product
      </button>
    </form>
  );
};

export default InventoryForm;
