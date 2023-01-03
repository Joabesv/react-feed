import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <strong>Joabe Silva</strong>
        <span>Developer, mainly js</span>
      </div>

      <footer>
        <a href="#">Editar meu perfil</a>
      </footer>
    </aside>
  );
}
