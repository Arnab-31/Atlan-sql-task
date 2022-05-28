import styles from './App.module.css';
import Nav from './Components/Nav/Nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Query from './Components/Query/Query';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.container}>
          <Sidebar />
        <div>
            <div>
              <Query />
            </div>

            <div>
              Rows
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
