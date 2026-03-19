import { generateId } from "ai";
import Chat from "@/app/chat/[chatId]/chat";
export default function Home() {
  return <Chat chatData={{ id: generateId(), messages: [] }} isNewChat />;
}
