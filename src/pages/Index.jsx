import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton, Image } from "@chakra-ui/react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
      setIsTyping(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" color="black">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid black" borderRadius="md" p={4} bg="white">
          {messages.map((message, index) => (
            <HStack key={index} justify={message.sender === "You" ? "flex-end" : "flex-start"}>
              <VStack alignItems={message.sender === "You" ? "flex-end" : "flex-start"}>
                <Text>{message.sender}</Text>
                <Box bg={message.sender === "You" ? "black" : "gray.200"} color={message.sender === "You" ? "white" : "black"} p={2} borderRadius="md">
                  {message.text}
                </Box>
              </VStack>
            </HStack>
          ))}
          {isTyping && (
            <HStack justify="flex-start">
              <Avatar size="sm" name="Zoozoo" src="https://images.unsplash.com/photo-1617289755070-3590b660a06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx6b296b28lMjBjaGFyYWN0ZXJ8ZW58MHx8fHwxNzE1ODUyODYxfDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text>Zoozoo is typing...</Text>
            </HStack>
          )}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={handleInputChange} placeholder="Type a message..." borderColor="black" />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} colorScheme="blackAlpha" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
