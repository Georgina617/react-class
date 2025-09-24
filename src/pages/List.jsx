import User from "../Data";
const List = () => {
  //Array of objects

  return (
    <section className="p-12 flex gap-3 flex-wrap">
      {User.map((u, index) => (
        <div
          key={index}
          className="h-fit w-60 rounded-lg p-4 shadow-lg border-[-1px] border-gray-200 flex flex-col justify-end"
        >
          <img src={u.image} />
          <h3 className="font-bold text-xl">{u.name}</h3>
          <p className="text-gray-600">{u.position}</p>
          <p className="font-semibold">{u.age}</p>
        </div>
      ))}
    </section>
  );
};

export default List;
