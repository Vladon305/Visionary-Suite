import { useState } from 'react';
import { generateId } from 'shared';

interface Todo {
  id: string;
  name: string;
  status: boolean;
}
export const TaskMasterPage = () => {
  const [toDos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleAddToArray = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...toDos,
        { id: generateId(), name: inputValue, status: false },
      ]);
      setInputValue('');
    }
  };

  const changeStatus = (id: string) => {
    setTodos(
      toDos.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        } else return todo;
      }),
    );
  };

  return (
    <div>
      <label>Заметки:</label>
      <input
        type='text'
        id='dataInput'
        name='dataInput'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddToArray}>Сохранить</button>

      <div>
        {toDos.map(item => (
          <div key={item.id}>
            <input
              type='checkbox'
              onChange={() => changeStatus(item.id)}
              checked={item.status}
            />
            {item.name}
            <button
              onClick={() => {
                setTodos(toDos.filter(todo => todo.id !== item.id));
              }}
            >
              удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
