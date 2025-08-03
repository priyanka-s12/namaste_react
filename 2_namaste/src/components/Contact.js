const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-2">Contact</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-4"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-4"
        />
        <button className="border border-black p-2 bg-gray-100 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
