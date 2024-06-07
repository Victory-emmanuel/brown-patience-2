import { FacebookSharp, Instagram, X, WhatsApp } from "@mui/icons-material";

import { SocialsLink, SocialsMain } from "../styles/index.styled";

const Socials = () => {
  return (
    <>
      <SocialsMain id="socials">
        <SocialsLink to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
          <WhatsApp sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink to={"https://twitter.com/ContentsbyBrown?s=09"}>
          <X sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink to={"https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"}>
          <Instagram sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink to={"https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"}>
          <FacebookSharp sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
      </SocialsMain>
    </>
  );
};

export default Socials;
