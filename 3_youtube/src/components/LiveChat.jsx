import React, { useEffect, useState } from 'react';
import { ChatMessages } from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../utils/chatSlice';
import { generateRandomMessages, generateRandomName } from '../../utils/helper';

function LiveChat() {
  const [liveMesaage, setLiveMessage] = useState('');
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // console.log('API Calling');

      //   dispatch(addMessage({ name: 'Priyanka S', message: 'Lorem ipsum' }));
      // }, 2000);
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <h3 className="font-bold p-2 m-2 text-lg">Live Chat</h3>

      <div className="border border-black m-2 bg-slate-100 h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* <ChatMessages name="Priyanka S" message="Lorem ipsum" /> */}
        {/* <ChatMessages name="Priyanka S" message="Lorem ipsum" />
      <ChatMessages name="Priyanka S" message="Lorem ipsum" />
      <ChatMessages name="Priyanka S" message="Lorem ipsum" />
      <ChatMessages name="Priyanka S" message="Lorem ipsum" /> */}
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessages key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <div>
        <form
          className="border border-black m-2 p-2 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: 'Priyanka S',
                message: liveMesaage,
              })
            );
            setLiveMessage('');
          }}
        >
          <input
            type="text"
            className="border border-black w-80 p-1 m-2"
            value={liveMesaage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="bg-green-200 px-2 py-1 rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
}

export default LiveChat;
