export default function UserCard({userName,job,email,profilePicture}) {
  return (
    <div className="max-w-sm mx-auto bg-red-200 rounded-2xl shadow-md overflow-hidden p-6 text-center ">
      <img
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-500"
        src={profilePicture}
        alt="User"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{userName}</h2>
      <p className="text-sm text-gray-500">{job}</p>
      <p className="text-sm text-indigo-600 mt-2">{email}</p>
    
    </div>
  );
};