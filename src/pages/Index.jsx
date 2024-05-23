import React, { useState } from "react";
import { Container, Text, VStack, Button, SimpleGrid, Box, Input, HStack } from "@chakra-ui/react";

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
  "Attend an industry conference",
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
  const [clickedCells, setClickedCells] = useState(new Array(25).fill(false));
  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [email, setEmail] = useState("");

  const handleGenerateCard = () => {
    setBingoCard(generateBingoCard());
    setClickedCells(new Array(25).fill(false));
    setShowGenerateButton(false);
  };

  const handleCellClick = (index) => {
    const newClickedCells = [...clickedCells];
    newClickedCells[index] = !newClickedCells[index];
    setClickedCells(newClickedCells);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveCard = () => {
    // Logic to save the card can be added here
    console.log("Card saved with email:", email);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Domain Name Bingo</Text>
        <SimpleGrid columns={5} spacing={2} width="100%" maxW="687.5px" minChildWidth="125px">
          {bingoCard.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              textAlign="center"
              bg={item === "Hand register a domain" || clickedCells[index] ? "green.200" : "white"}
              width="125px"
              height="125px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="0.9rem"
              whiteSpace="normal"
              overflow="hidden"
              textOverflow="ellipsis"
              onClick={() => handleCellClick(index)}
              cursor="pointer"
            >
              {item}
            </Box>
          ))}
        </SimpleGrid>
        {showGenerateButton ? (
          <Button onClick={handleGenerateCard} colorScheme="blue" mt={4}>Generate Card</Button>
        ) : (
          <VStack spacing={4} mt={4}>
            <HStack>
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                size="md"
              />
              <Button onClick={handleSaveCard} colorScheme="green">Save my card</Button>
            </HStack>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;