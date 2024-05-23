import React, { useState } from "react";
import { Container, Text, VStack, Button, SimpleGrid, Box } from "@chakra-ui/react";

const bingoOptions = [
  "Win a domain auction as the only bidder",
  "Purchase an expired domain",
  "Win a domain auction with competing bids",
  "Earn money from a parked domain",
  "Sell a domain through a marketplace",
  "Sell a domain through a broker",
  "Sell a domain directly",
  "Lease a domain you own",
  "Own 100 domains",
  "Own 1000 domains",
  "Get an unsolicited offer for a domain",
  "Participate in a UDRP claim",
  "Own a ngTLD (\"new gTLD\")",
  "Own a ccTLD",
  "Let a domain expire",
  "Go 30 days with no new domains",
  "Own 3 of the same SLD domains with different TLDs",
  "Own a dictionary word .com",
  "Purchase a lot of multiple domains",
  "Sell a domain for 5 figures or more",
  "Backorder a domain successfully",
  "Own a domain for 10 years",
  "Attend namescon (or another industry conference)",
  "Create a personal domain website"
];

const generateBingoCard = () => {
  const shuffledOptions = bingoOptions.sort(() => 0.5 - Math.random());
  const card = shuffledOptions.slice(0, 24);
  card.splice(12, 0, "Hand register a domain"); // Insert "Hand register a domain" in the center
  return card;
};

const Index = () => {
  const [bingoCard, setBingoCard] = useState(generateBingoCard());

  const handleGenerateCard = () => {
    setBingoCard(generateBingoCard());
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Domain Name Bingo</Text>
        <SimpleGrid columns={5} spacing={2} width="100%" maxW="500px">
          {bingoCard.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              textAlign="center"
              bg={item === "Hand register a domain" ? "yellow.200" : "white"}
              width="80px"
              height="80px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm" // Add this line to shrink the font size
            >
              {item}
            </Box>
          ))}
        </SimpleGrid>
        <Button onClick={handleGenerateCard} colorScheme="blue" mt={4}>Generate Card</Button>
      </VStack>
    </Container>
  );
};

export default Index;