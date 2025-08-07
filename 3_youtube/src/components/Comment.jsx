function Comment({ data }) {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-3 mt-3 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
        className="h-8"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;
