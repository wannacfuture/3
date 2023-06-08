import React from "react";
import { Box, Stack, Text, Icon, Divider, Button } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";

import Ava1 from "../assets/Ava1.png";
import Ava2 from "../assets/Ava2.png";
import Ava3 from "../assets/Ava3.png";
import Vector from "../assets/Vector.png";
import imgUrl from "../assets/Rectangle.png";
import Calendar from "../assets/Calendar.png";
import Building from "../assets/Building.png";
import { TicketCounter } from "./TicketCounter";

export interface BrowserPageProps {}

export const BrowserPage: React.FC<BrowserPageProps> = () => {
  const property = {
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <Stack
        display="flex"
        width={"100%"}
        padding={"40px 100px 40px 100px"}
        flexDirection="row"
      >
        <Stack display="flex" flexDirection="column" width="815px">
          <img src={imgUrl} alt="Rect" />
          <Stack display="flex">
            <Stack display="flex">
              <Text
                fontSize="48px"
                fontWeight="500"
                lineHeight="61.44px"
                paddingTop="32px"
              >
                Where is Major Tom?
              </Text>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              marginBottom="32px!important"
            >
              <Box
                display="flex"
                flexDirection="row"
                height="56px"
                borderRadius="64px"
                border="1px"
                borderColor="#E5E5E5"
                alignItems="center"
                width="fit-content"
                padding="4px 20px 4px 4px"
                marginRight="16px"
                marginTop="0px!important"
              >
                <Stack
                  width="48px"
                  height="48px"
                  backgroundColor="#EFEEEE"
                  borderRadius="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={Calendar} width="20px" height="20px" />
                </Stack>
                <Box ml="3">
                  <Text fontSize="12px" lineHeight="13.2px" color="#737373">
                    Sale Date
                  </Text>
                  <Text fontSize="14px" lineHeight="19.6px">
                    18/01/2023, 08:30PM
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                height="56px"
                borderRadius="64px"
                border="1px"
                borderColor="#E5E5E5"
                alignItems="center"
                width="fit-content"
                padding="4px 20px 4px 4px"
                marginRight="16px!important"
                marginTop="0px!important"
              >
                <Stack
                  width="48px"
                  height="48px"
                  backgroundColor="#EFEEEE"
                  borderRadius="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={Building} width="20px" height="20px" />
                </Stack>
                <Box ml="3">
                  <Text fontSize="12px" lineHeight="13.2px" color="#737373">
                    Place
                  </Text>
                  <Text fontSize="14px" lineHeight="19.6px">
                    Miami, USA
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                height="56px"
                borderRadius="64px"
                border="1px"
                borderColor="#E5E5E5"
                alignItems="center"
                width="fit-content"
                padding="4px 20px 4px 4px"
                marginRight="16px!important"
                marginTop="0px!important"
              >
                <Stack
                  width="48px"
                  height="48px"
                  backgroundColor="#EFEEEE"
                  borderRadius="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={Ava1} alt="Avatar1" />
                </Stack>
                <Box ml="3">
                  <Text fontSize="12px" lineHeight="13.2px" color="#737373">
                    Creator
                  </Text>
                  <Text fontSize="14px" lineHeight="19.6px">
                    @_thedavfoto
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                height="56px"
                borderRadius="64px"
                border="1px"
                borderColor="#E5E5E5"
                alignItems="center"
                width="fit-content"
                padding="4px 20px 4px 4px"
                marginRight="16px!important"
                marginTop="0px!important"
              >
                <Stack
                  width="48px"
                  height="48px"
                  backgroundColor="#EFEEEE"
                  borderRadius="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={Ava2} alt="Avatar2" />
                </Stack>
                <Box ml="3">
                  <Text fontSize="12px" lineHeight="13.2px" color="#737373">
                    Attends
                  </Text>
                  <Text fontSize="14px" lineHeight="19.6px">
                    156
                  </Text>
                </Box>
              </Box>
            </Stack>
            <Divider marginTop="0px!important" />
            <Stack
              marginTop="16px!important"
              display="flex"
              flexDirection="column"
            >
              <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
                Description
              </Text>
              <Text fontSize="16px" lineHeight="22.4px" color="#737373">
                The Marblenauts is the first collection of Marble Finance. 1001
                hand-drawn NFT ready to conquer the Cosmos. Each Marblenaut is
                your digital identity on Marble Finance.
              </Text>
            </Stack>
            <Stack
              display="flex"
              marginTop="32px!important"
              flexDirection="column"
            >
              <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
                Royalties
              </Text>
              <Box
                marginTop="16px!important"
                display="flex"
                flexDirection="row"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  height="82px"
                  width="245px"
                  padding="16px 24px 16px 24px"
                  backgroundColor="#EFEEEE"
                  borderRadius="8px"
                  marginRight="16px"
                >
                  <Text fontWeight="500" fontSize="14px" lineHeight="18px">
                    Artist
                  </Text>
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                    marginTop="8px"
                  >
                    <Box display="flex" flexDirection="row">
                      <img
                        src={Ava3}
                        alt="Avatar3"
                        width="24px"
                        height="24px"
                      ></img>
                      <Text fontSize="16px" lineHeight="140%" marginLeft="4px">
                        John Doe
                      </Text>
                    </Box>
                    <Box>
                      <Text fontWeight="500" fontSize="14px" lineHeight="18px">
                        0%
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  height="82px"
                  width="245px"
                  padding="16px 24px 16px 24px"
                  backgroundColor="#EFEEEE"
                  borderRadius="8px"
                  marginRight="16px"
                >
                  <Text fontWeight="500" fontSize="14px" lineHeight="18px">
                    Collection
                  </Text>
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                    marginTop="8px"
                  >
                    <Box display="flex" flexDirection="row">
                      <img
                        src={Ava2}
                        width="24px"
                        height="24px"
                        alt="Avatar3"
                      ></img>
                      <Text fontSize="16px" lineHeight="140%" marginLeft="4px">
                        Marble
                      </Text>
                    </Box>
                    <Box>
                      <Text fontWeight="500" fontSize="14px" lineHeight="18px">
                        10%
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Divider marginTop="32px!important" />
            <Stack
              display="flex"
              flexDirection="column"
              marginTop="16px!important"
            >
              <Text fontSize="18px" fontWeight="500" lineHeight="23.04px">
                About this client
              </Text>
              <Text fontSize="16px" lineHeight="22.4px" color="#737373">
                Commodo auctor urna augue posuere maecenas cum eget odio. Elit
                euismod vitae morbi orci posuere egestas ultricies. Eros tortor
                sit euismod mi eu sit. Sit a mi non mauris volutpat augue
                viverra. Eu aliquet vel massa id. Non eu eu odio amet amet nisi.
                Aliquam consectetur semper dignissim egestas porttitor sed. Diam
                vel pretium arcu ultricies mi dignissim accumsan. Aliquet id
                aliquam sociis nec eget nullam mi. Maecenas ornare sollicitudin
                risus risus libero auctor ac pellentesque volutpat.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          width="392px"
          height="fit-content"
          marginLeft="32px!important"
          flexDirection="column"
          border="solid 1px"
          borderColor="#E5E5E5"
          borderRadius="8px"
          padding="24px"
        >
          <Box display="flex" flexDirection="column">
            <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
              Your order
            </Text>
            <Text
              fontWeight="500"
              fontSize="24px"
              lineHeight="30.72px"
              marginTop="24px"
            >
              Where is major tom?
            </Text>
            <Text
              fontSize="12px"
              lineHeight="13.2px"
              marginTop="12px"
              color="#737373"
            >
              18/01/2023, 08:30PM
            </Text>
            <Text
              fontWeight="500"
              fontSize="14px"
              lineHeight="19.6px"
              marginTop="4px"
            >
              Hard Rock Stadium, Miami, USA
            </Text>
          </Box>

          <Box display="flex" flexDirection="column">
            <Divider marginTop="24px!important"></Divider>
            <Box
              display="flex"
              flexDirection="column"
              width="261px"
              height="127px"
              marginTop="24px"
            >
              <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                  <Box
                    display="flex"
                    backgroundColor="#EFEEEE"
                    width="56px"
                    height="56px"
                    justifyContent="center"
                    alignItems="center"
                    marginRight="24px"
                  >
                    <img src={Vector} alt="Vector" />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
                      Gold ticket
                    </Text>
                    <Box display="flex" flexDirection="row" marginTop="4px">
                      <Text color="#737373" fontSize="14px" lineHeight="19.6px">
                        Available:
                      </Text>
                      <Text
                        fontSize="14px"
                        lineHeight="19.6px"
                        marginLeft="8px"
                      >
                        20
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" marginTop="24px">
                <TicketCounter defaultValue={2} />
                <Box display="flex" flexDirection="column" marginLeft="32px">
                  <Text fontSize="16px" lineHeight="22.4px">
                    0.004 BTN
                  </Text>
                  <Text
                    marginTop="2px"
                    color="#737373"
                    fontSize="14px"
                    lineHeight="19.6px"
                  >
                    ≈ $ 91,86
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Divider marginTop="24px!important"></Divider>
            <Box
              display="flex"
              flexDirection="column"
              width="261px"
              height="127px"
              marginTop="24px"
            >
              <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                  <Box
                    display="flex"
                    backgroundColor="#EFEEEE"
                    width="56px"
                    height="56px"
                    justifyContent="center"
                    alignItems="center"
                    marginRight="24px"
                  >
                    <img src={Vector} alt="Vector" />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
                      Silver ticket
                    </Text>
                    <Box display="flex" flexDirection="row" marginTop="4px">
                      <Text color="#737373" fontSize="14px" lineHeight="19.6px">
                        Available:
                      </Text>
                      <Text
                        fontSize="14px"
                        lineHeight="19.6px"
                        marginLeft="8px"
                      >
                        20
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" marginTop="24px">
                <TicketCounter defaultValue={1} />
                <Box display="flex" flexDirection="column" marginLeft="32px">
                  <Text fontSize="16px" lineHeight="22.4px">
                    0.003 BTN
                  </Text>
                  <Text
                    marginTop="2px"
                    color="#737373"
                    fontSize="14px"
                    lineHeight="19.6px"
                  >
                    ≈ $ 68,90
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Divider marginTop="24px!important"></Divider>
            <Box
              display="flex"
              flexDirection="column"
              width="261px"
              height="127px"
              marginTop="24px"
            >
              <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                  <Box
                    display="flex"
                    backgroundColor="#EFEEEE"
                    width="56px"
                    height="56px"
                    justifyContent="center"
                    alignItems="center"
                    marginRight="24px"
                  >
                    <img src={Vector} alt="Vector" />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Text fontWeight="500" fontSize="18px" lineHeight="23.04px">
                      Bronze ticket
                    </Text>
                    <Box display="flex" flexDirection="row" marginTop="4px">
                      <Text color="#737373" fontSize="14px" lineHeight="19.6px">
                        Available:
                      </Text>
                      <Text
                        fontSize="14px"
                        lineHeight="19.6px"
                        marginLeft="8px"
                      >
                        20
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" marginTop="24px">
                <TicketCounter defaultValue={0} />
                <Box display="flex" flexDirection="column" marginLeft="32px">
                  <Text fontSize="16px" lineHeight="22.4px">
                    0.002 BTN
                  </Text>
                  <Text
                    marginTop="2px"
                    color="#737373"
                    fontSize="14px"
                    lineHeight="19.6px"
                  >
                    ≈ $ 45,93
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider marginTop="24px!important"></Divider>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
              marginTop="24px!important"
            >
              <Text color="#737373" fontSize="16px" lineHeight="22.4px">
                Gold ticket x 2
              </Text>
              <Text fontSize="16px" lineHeight="22.4px">
                0.008 BTN
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
              marginTop="24px!important"
            >
              <Text color="#737373" fontSize="16px" lineHeight="22.4px">
                Bronze ticket x 2
              </Text>
              <Text fontSize="16px" lineHeight="22.4px">
                0.002 BTN
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
              marginTop="24px!important"
              alignItems="center"
            >
              <Text color="#737373" fontSize="20px" lineHeight="28px">
                Total
              </Text>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Text fontSize="16px" lineHeight="22.4px">
                  0.002 BTN
                </Text>
                <Text fontSize="14px" lineHeight="19.6px" marginLeft="8px">
                  $ 229,65
                </Text>
              </Box>
            </Box>
            <Button
              width="344px"
              height="48px"
              borderRadius="16px"
              padding="22px 32px 22px 32px"
              marginTop="32px"
              backgroundColor="black"
              color="white"
            >
              Buy now
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
