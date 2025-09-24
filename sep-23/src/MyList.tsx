import MyListItem from "./MyListItem";

type MyListProps = {
  list: string[];
};

export default function MyList({ list }: MyListProps) {
  return (
    <ul>
      {list.map((item, index) =>
        <MyListItem key={index}>{item}</MyListItem>
      )}
    </ul>
  );
}
