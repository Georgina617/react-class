import UserCard from "./User"

const UserSection = () => {
  return (
    <div className="grid grid-cols-6 p-6 gap-2">
      <UserCard profilePicture="https://randomuser.me/api/portraits/men/32.jpg" userName="John Doe" job="Full stack Developer" email="john.doe@gmail.com"/>
      <UserCard profilePicture="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" userName="Jane Doe" job="Front End Developer" email="jane.doe@gmail.com"/>
      <UserCard profilePicture="https://randomuser.me/api/portraits/men/32.jpg" userName="Daniel King" job="Product designer" email="daniel.king@gmail.com"/>
      <UserCard profilePicture="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg " userName="Mary Anne" job="Cybersecurity" email="mary.anne@gmail.com"/>
      <UserCard profilePicture="https://randomuser.me/api/portraits/men/32.jpg" userName="Lily Robert" job="Digital Marketer" email="lily.robert@gmail.com"/>
      <UserCard profilePicture="https://randomuser.me/api/portraits/men/32.jpg"userName="Alex House" job="Software Engineer " email="alex.house@gmail.com"/>
    </div>
  );
};

export default UserSection;