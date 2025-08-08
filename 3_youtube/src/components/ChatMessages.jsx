export const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center gap-1.5 m-2 p-2 shadow-sm">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
        className="h-5"
      />
      <span className="font-bold">{name}: </span>
      <span>{message}</span>
    </div>
  );
};
