const UserCard = ({ user, _,sendConnectionRequest }) => {
  return (
    
      <div className="card bg-base-100 w-65 shadow-sm bg-green place-items-center" style={{border:"1px solid white" , maxHeight:"500px"}}>
        <figure>
          <img src={user?.photoUrl} alt="Shoes"  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user?.firstName + " " + user?.lastName}</h2>
          <p>{user?.age && user?.gender && user?.age + "," + user?.gender}</p>
          <p>{user?.about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={() =>sendConnectionRequest(user?._id,"ignored" )}>Ignore</button>
            <button className="btn btn-primary" onClick={() =>sendConnectionRequest(user?._id, "Interest" )}>Interested</button>
          </div>
        </div>
      </div>

  );
};

export default UserCard;
