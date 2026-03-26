import { Form } from 'react-bootstrap';

const AttributesFilterComponent = () => {
  const attributes = [
    { name: 'Color', options: ['red', 'blue', 'green'] },
    { name: 'RAM', options: ['1 TB', '2 TB'] },
  ];

  return (
    <>
      {attributes.map((item, index) => (
        <div key={index}>
          <Form.Label>{item.name}</Form.Label>

          {item.options.map((option, optionIndex) => (
            <Form.Check
              key={optionIndex}
              type="checkbox"
              id={`${item.name}-${optionIndex}`}
              label={option}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;

