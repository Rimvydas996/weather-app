import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <div className=".navbar bg-primary">
      <div>logo</div>
      <SearchBar />
      <ul>
        <li>First selection</li>
        <li>Secoond selection</li>
        <li>Third selection</li>
      </ul>
    </div>
  );
}
