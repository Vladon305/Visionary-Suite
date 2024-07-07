import { useEffect, useState } from 'react';
import { generateId } from 'shared';
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Card, Flex } from 'antd';

interface Todo {
  id: string;
  name: string;
  description: string;
  status: boolean;
}
export const TaskMasterPage = () => {
  const [toDos, setTodos] = useState<Todo[]>([]);
  const [selectedToDo, setSelectedToDo] = useState<Todo | null>(null);
  const [discriptionInputValue, setDiscriptionInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleAddToArray = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...toDos,
        {
          id: generateId(),
          name: inputValue,
          description: discriptionInputValue,
          status: false,
        },
      ]);
      setInputValue('');
      setDiscriptionInputValue('');
    }
  };

  useEffect(() => {
    setSelectedToDo(null);
  }, [toDos]);

  // const changeStatus = (id: string) => {
  //   setTodos(
  //     toDos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, status: !todo.status };
  //       } else return todo;
  //     }),
  //   );
  // };

  return (
    <Flex vertical style={{ maxHeight: '100vh' }}>
      <Row gutter={10} style={{}} justify={'space-between'}>
        <Col>
          <Card
            onKeyDown={event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleAddToArray();
              }
            }}
          >
            <div style={{ display: 'flex', gap: '5px' }}>
              <input
                type='text'
                id='dataInput'
                name='dataInput'
                placeholder='Название задачи'
                value={inputValue}
                onChange={handleInputChange}
                style={{ maxWidth: '230px' }}
                maxLength={22}
              />

              <button style={{ maxWidth: '50px' }} onClick={handleAddToArray}>
                Save
              </button>
            </div>
            <textarea
              value={discriptionInputValue}
              onChange={e => {
                setDiscriptionInputValue(e.currentTarget.value);
              }}
              style={{
                height: '240px',
                width: '220px',
                resize: 'none',
                marginTop: '10px',
              }}
              placeholder='Описание задачи'
              name=''
              id='dataInput'
            ></textarea>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              width: '260px',
              height: '327px',
              overflowY: 'scroll',
            }}
          >
            {toDos.map(item => (
              <div
                onClick={() => setSelectedToDo(item)}
                key={item.id}
                style={{
                  borderTop: '0.5px solid black',
                  borderBottom: '0.5px solid black',
                  borderRadius: '2px',
                  marginTop: '10px',
                }}
              >
                {/* <input
                type='checkbox'
                onChange={() => changeStatus(item.id)}
                checked={item.status}
              /> */}
                {item.name}
                <button
                  onClick={() => {
                    setTodos(toDos.filter(todo => todo.id !== item.id));
                  }}
                  style={{
                    border: '0px',
                    color: 'rgba(255, 0, 0, 0.534)',
                    fontSize: '10px',
                  }}
                >
                  <DeleteOutlined />
                </button>
              </div>
            ))}
          </Card>
        </Col>
        <Card style={{ width: '276px', height: '327px' }}>
          <Col>
            {selectedToDo && (
              <Col
                style={{
                  width: '230px',
                  height: '300px',
                  overflowY: 'scroll',
                  wordWrap: 'break-word',
                }}
              >
                {selectedToDo.description}
              </Col>
            )}
          </Col>
        </Card>
      </Row>
    </Flex>
  );
};
