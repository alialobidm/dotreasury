import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";

import Card from "../../components/Card";
import CommentArea from "./CommentArea";
import NoComment from "./NoComment";
import Input from "./Input";

const Header = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: #1d253c;
  margin-bottom: 20px;
`;

const Body = styled(Card)`
  padding: 20px;
`;

const Comment = () => {
  return (
    <div>
      <Header>Comment</Header>
      <Body>
        <CommentArea>
          <NoComment />
        </CommentArea>
        <Divider />
        <Input />
      </Body>
    </div>
  );
};

export default Comment;
