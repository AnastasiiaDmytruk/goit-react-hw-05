import styles from "./SearchForm.module.css"
const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.currentTarget.searchedMovie.value; // Отримуємо значення з поля введення за його ім'ям (name="searchedMovie")
    onSubmit(query);
  };

  return (
    // Встановлюємо обробник події для форми, який буде викликатися при надсиланні форми
    <div className={styles.wrapper}>
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="searchedMovie" // Назва поля, за допомогою якої ми звертаємося до значення у формі
        required></input>
      <button className={styles.button} type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchForm;
