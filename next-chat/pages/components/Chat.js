import styled from "styled-components";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const [recipientSnapshot] = useCollection(
    query(
      collection(db, "users"),
      where("email", "==", getRecipientEmail(users, user))
    )
  );
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientPhoto = recipient?.photoURL;

  return (
    <Container className="bg-stone-700 hover:bg-stone-200 animate group">
      {recipient ? (
        <UserAvatar src={recipientPhoto} />
      ) : (
        <UserAvatar className="text-stone-900 group-hover:text-stone-200 font-bold text-[1.5vw] bg-stone-200 group-hover:bg-stone-700 animate flex justify-center items-center">
          {recipientEmail[0]}
        </UserAvatar>
      )}
      <RecipientEmail className="text-stone-200 group-hover:text-stone-900 animate font-medium">
        {recipientEmail}
      </RecipientEmail>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  word-break: break-all;
  justify-content: start;
  align-items: center;
  width: 95%;
  border-radius: 1.5vw;
  padding-right: 1vw;
  padding-left: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  user-select: none;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
  &:hover {
    cursor: pointer;
  }
`;

const RecipientEmail = styled.p`
  font-size: 1vw;
`;

const UserAvatar = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 5vw;
  margin-right: 0.5vw;
`;
