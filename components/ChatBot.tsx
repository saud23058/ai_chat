"use client";
import { usePromptMutation } from "@/lib/redux/features/chatApiSlice";
import React, { useState } from "react";

const ChatBot = () => {
  const [triggerPrompt, { isLoading, error }] = usePromptMutation();
  const [response, setResponse] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");

  const sendPrompt = async () => {
    if (!userInput.trim()) return;
    try {
      const result = await triggerPrompt(userInput).unwrap();
      console.log("AI Response:", result);
      setResponse(result.ai);
      setUserInput("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="flex flex-col w-[900px] items-center justify-center h-screen px-4">
      <div className="w-full bg-white shadow-lg rounded-lg p-4 flex flex-col h-[500px]">
        <div className="text-center text-lg font-semibold py-2 border-b">
          🤖 ChatBot
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-3">
          {isLoading && (
            <p className="text-gray-500 text-center">Generating response...</p>
          )}
          {error && (
            <p className="text-red-500 text-center">
              Error: {JSON.stringify(error)}
            </p>
          )}
          {response && (
            <div className="bg-gray-200 p-3 rounded-lg w-fit max-w-[80%]">
              <p className="text-gray-900">🤖 {response}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 border-t p-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
          />
          <button
            onClick={sendPrompt}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
