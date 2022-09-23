import SearchBar from "./search";
var numeral = require("numeral");
export default function Home() {
  var myNumeral = numeral(24704033750);
  var string = myNumeral.format("$ 0.00 a");
  console.log("string", string);
  return (
    <>
      <SearchBar />
    </>
  );
}
