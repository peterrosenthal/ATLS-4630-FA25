import SearchValueContext from "./searchValueContext";
import { useContext } from "react";

type MyListItemProps = {
  children: React.ReactNode;
};

export default function MyListItem({ children }: MyListItemProps) {
  const searchValue = useContext(SearchValueContext);

  return (
    <li>{searchValue}: {children}</li>
  )
}
