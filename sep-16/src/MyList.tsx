export default function MyList() {
  const items = [
    { text: 'Hello I\'m item 1!', id: 1 },
    { text: 'Hello I\'m item 2!', id: 2 },
    { text: 'Hello I\'m item 3!', id: 3 },
  ];

  return (
    <ul>
      {items.map(item =>
        <li key={item.id}>{item.text}</li>
      )}
    </ul>
  );
}
