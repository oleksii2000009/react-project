import React, { useState } from "react";

const Search = ({ tasks }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks || []);

  function filterTasks(updatedName, updatedNumber, updatedDescription, updatedTags) {
    let filtered = tasks || [];

    if (updatedName) {
      filtered = filtered.filter((task) => task.name.toLowerCase().includes(updatedName.toLowerCase()));
    }

    if (updatedNumber) {
      filtered = filtered.filter((task) => task.priority == updatedNumber);
    }

    if (updatedDescription) {
      filtered = filtered.filter((task) => task.description.toLowerCase().includes(updatedDescription.toLowerCase()));
    }

    if (updatedTags) {
      const tagsArray = updatedTags.split(",").map(tag => tag.trim().toLowerCase());
      filtered = filtered.filter((task) =>
        tagsArray.every(tag => task.tag.toLowerCase().includes(tag))
      );
    }

    setFilteredTasks(filtered);
  }

  return (
    <div className="search_box">
      {/* Поиск по названию */}
      <input
        type="text"
        value={name}
        placeholder="Введите название задания"
        onChange={(e) => {
          const value = e.target.value;
          setName(value);
          filterTasks(value, number, description, tags);
        }}
      />

      {/* Поиск по приоритету */}
      <input
        type="number"
        value={number}
        placeholder="Введите приоритет задания"
        onChange={(e) => {
          const value = e.target.value;
          setNumber(value);
          filterTasks(name, value, description, tags);
        }}
      />

      {/* Поиск по описанию */}
      <input
        type="text"
        value={description}
        placeholder="Введите ключевые слова из описания"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
          filterTasks(name, number, value, tags);
        }}
      />

      {/* Поиск по тегам */}
      <input
        type="text"
        value={tags}
        placeholder="Введите теги через запятую"
        onChange={(e) => {
          const value = e.target.value;
          setTags(value);
          filterTasks(name, number, description, value);
        }}
      />

      {/* Отображение найденных элементов */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((element) => (
          <div key={element.id} className="one_box">
            <p>
              <b>Name:</b> {element.name} <b>Description:</b> {element.description} <b>Tag:</b> {element.tag} <b>Priority:</b> {element.priority} <b>Date:</b> {element.date}
            </p>
          </div>
        ))
      ) : (
        <p>Нет задач с таким параметром</p>
      )}
    </div>
  );
};

export default Search;
