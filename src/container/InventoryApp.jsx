import AddCategory from "../components/AddCategory/AddCategory";
import InventoryForm from "../components/InventoryForm/InventoryForm";
import ProductList from "../components/ProductList/ProductList";
import styles from "./inventory.module.css";
import { Provider } from "react-redux";
import store from "../features/store";

const InventoryApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <AddCategory />
        <h3 className={`text-white`}>Add New Product</h3>
        <InventoryForm />
        <h3 className="text-white">Product List</h3>
        <ProductList />
      </div>
    </Provider>
  );
};

export default InventoryApp;
