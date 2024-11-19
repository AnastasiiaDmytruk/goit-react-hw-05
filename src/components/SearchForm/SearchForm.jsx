const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.currentTarget.searchedMovie.value; // Отримуємо значення з поля введення за його ім'ям (name="searchedMovie")
    onSubmit(query);
  };

  return (
    // Встановлюємо обробник події для форми, який буде викликатися при надсиланні форми
    <form onSubmit={handleSubmit}>
      <input
        // className={styles.select}
        type="text"
        name="searchedMovie" // Назва поля, за допомогою якої ми звертаємося до значення у формі
        required></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
