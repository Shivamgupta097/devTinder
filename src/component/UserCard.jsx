const UserCard = ({ user }) => {
  return (
    <div>
      <div className="card bg-base-100 w-65 shadow-sm bg-green place-items-center">
        <figure>
          <img src={user?.photoUrl} alt="Shoes"  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
          <p>{user.age && user.gender && user.age + "," + user.gender}</p>
          <p>{user.about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
