const dummyData = [
  {
    id: "1",
    title: "first page",
    Image: "",
    address: "street...",
    description: "---",
  },
  {
    id: '2',
    title: "second page",
    Image: "",
    address: "street...",
    description: "---",
  },
];
function AllPages() {
  return (
    <section>
      <ul>
        {dummyData.map((option) => {
          return <li key={Option.id}>{option.title}</li>;
        })}
      </ul>
      All meetup pages
    </section>
  );
}
export default AllPages;
