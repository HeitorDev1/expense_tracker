import styles from "./Home.module.css"

function Home() {
    return (
        <div 
            className={styles.background_home}
        >
            <h1 className={styles.expense_title}>
                Expense <span className={styles.star}>★</span> Tracker
            </h1>
        </div>
    )
}

export default Home;