import { useState } from "react";
import Input from "../../common/Input/Input";
import Select from "../../common/Select/Select";
import Product from "../Product/Product";
import styles from "./productList.module.css";
import {useSelector,useDispatch} from 'react-redux';
import {removeItem, searchItems, sortItems} from '../../features/inventorySlice/inventorySlice';



const ProductList = () => {
  const {items} = useSelector((state)=> state.inventory);
  const dispatch = useDispatch();
  const options = [
    { value: "oldest", text: "oldest" },
    { value: "newest", text: "newest" },
  ];
  const [sort, setSort] = useState("oldest");
  const [search, setSearch] = useState("");
  const searchFilterHandler = (e) => {
    setSearch(e.target.value);
    dispatch(searchItems({search:e.target.value}));
    dispatch(sortItems({sort}));
  };
  const sortFilterHandler = (e) => {
    setSort(e.target.value);
    dispatch(sortItems({sort:e.target.value}));
  };
  const onDeleteHandler = (id)=>{
    dispatch(removeItem({id}));
  }
  return (
    <section className={styles.container}>
      <Input
        title="search"
        otherClass={styles.inputs}
        value={search}
        onChange={(e) => searchFilterHandler(e)}
      />
      <Select
        title="sort"
        value={sort}
        otherClass={styles.selectInput}
        options={options}
        onChange={(e) => sortFilterHandler(e)}
      />
      {items.map(item => {
        return (
          <Product
            onDelete={()=> onDeleteHandler(item.id)}
            key={item.id}
            category={item.category}
            date={item.date}
            name={item.name}
            quantity={item.quantity}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
