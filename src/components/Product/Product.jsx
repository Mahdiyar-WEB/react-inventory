import styles from './product.module.css'; 

const Product = ({name,date,category,quantity,onDelete}) => {
    const d = new Date();
    return ( 
        <li className={styles.container}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.details}>
                <span className={styles.date}>{d.toLocaleDateString(date)}</span>
                <span className={styles.category}>{category}</span>
                <span className={`${styles.quantity} rounded-circle `}>{quantity}</span>
                <button onClick={onDelete} className={`btn btn-outline-danger btn-sm ${styles.deleteBtn}`}>delete</button>
            </div>
        </li>
     );
}
 
export default Product;